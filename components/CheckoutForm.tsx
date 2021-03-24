import * as React from "react";
import * as ReactDOM from "react-dom";
import {loadStripe} from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";


const CardField = ({onChange}) => (
  <React.Fragment>
    <CardElement onChange={onChange} />
  </React.Fragment>
);

const Field = ({
  label,
  id,
  type,
  placeholder,
  required,
  autoComplete,
  value,
  onChange,
}) => (
    <TextField style={{"width":"100%"}} label={label} onChange={onChange} value={value} id={id} placeholder={placeholder} required={required} autoComplete={autoComplete} type={type}>
  </TextField>
);

const SubmitButton = ({processing, error, children, disabled}) => (
    <Button
      variant="outlined"
    disabled={processing || disabled}
  >
    {processing ? 'Processing...' : children}
  </Button>
);

const ErrorMessage = ({children}) => (
  <React.Fragment>
    <Typography variant="subtitle2" align="center">{children}</Typography>
  </React.Fragment>
);

const ResetButton = ({onClick}) => (
 <button type="button" className="ResetButton" onClick={onClick}>
    <svg width="32px" height="32px" viewBox="0 0 32 32">
      <path
        fill="#FFF"
        d="M15,7.05492878 C10.5000495,7.55237307 7,11.3674463 7,16 C7,20.9705627 11.0294373,25 16,25 C20.9705627,25 25,20.9705627 25,16 C25,15.3627484 24.4834055,14.8461538 23.8461538,14.8461538 C23.2089022,14.8461538 22.6923077,15.3627484 22.6923077,16 C22.6923077,19.6960595 19.6960595,22.6923077 16,22.6923077 C12.3039405,22.6923077 9.30769231,19.6960595 9.30769231,16 C9.30769231,12.3039405 12.3039405,9.30769231 16,9.30769231 L16,12.0841673 C16,12.1800431 16.0275652,12.2738974 16.0794108,12.354546 C16.2287368,12.5868311 16.5380938,12.6540826 16.7703788,12.5047565 L22.3457501,8.92058924 L22.3457501,8.92058924 C22.4060014,8.88185624 22.4572275,8.83063012 22.4959605,8.7703788 C22.6452866,8.53809377 22.5780351,8.22873685 22.3457501,8.07941076 L22.3457501,8.07941076 L16.7703788,4.49524351 C16.6897301,4.44339794 16.5958758,4.41583275 16.5,4.41583275 C16.2238576,4.41583275 16,4.63969037 16,4.91583275 L16,7 L15,7 L15,7.05492878 Z M16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 Z"
      />
    </svg>
  </button>
);


const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = React.useState(null);
  const [cardComplete, setCardComplete] = React.useState(false);
  const [processing, setProcessing] = React.useState(false);
  const [paymentMethod, setPaymentMethod] = React.useState(null);
  const [billingDetails, setBillingDetails] = React.useState({
    email: '',
      });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    if (error) {
      elements.getElement('card').focus();
      return;
    }

    if (cardComplete) {
      setProcessing(true);
    }

    const payload = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: billingDetails,
    });

    setProcessing(false);

    if (payload.error) {
      setError(payload.error);
    } else {
      setPaymentMethod(payload.paymentMethod);
    }
  };

  const reset = () => {
    setError(null);
    setProcessing(false);
    setPaymentMethod(null);
    setBillingDetails({
      email: '',
      phone: '',
      name: '',
    });
  };

  return paymentMethod ? (
    <React.Fragment>
      <div role="alert">
        Payment successful
      </div>
      <div>
        Thanks for your interest in dungeon.chat. No money was charged, but we
        generated a PaymentMethod: {paymentMethod.id}
      </div>
      <ResetButton onClick={reset} />
    </React.Fragment>
  ) : (
      <React.Fragment>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Field
        onSubmit={handleSubmit}
          label="Email"
          id="email"
          type="email"
          placeholder="lostina@dungeon.chat"
          required
          autoComplete="email"
          value={billingDetails.email}
          onChange={(e) => {
            setBillingDetails({...billingDetails, email: e.target.value});
          }}
             />
          </Grid>
          <Grid item>
        <CardField
          onChange={(e) => {
            setError(e.error);
            setCardComplete(e.complete);
          }}
        />
          </Grid>
          <Grid item>
          {error && <ErrorMessage>{error.message}</ErrorMessage>}
          </Grid>
          <Grid item align="center">
      <SubmitButton processing={processing} error={error} disabled={!stripe}>
        Checkout
      </SubmitButton>
          </Grid>
</Grid>
    </React.Fragment>
  );
};

const stripePromise = loadStripe('pk_test_51IT9atJ4MRcltQjclyx9jsEDAUXWTo8f0uvtQGJKl49RVZDp9KBvxppFr44ixh6uIGzkjASn5JZtBH6B1PnPW0uW006qfX35Sn');

export const InjectedCheckoutForm = () => {
    return <Elements stripe={stripePromise}>
      <CheckoutForm/>
    </Elements>
}
