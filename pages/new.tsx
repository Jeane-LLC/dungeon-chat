import * as React from "react";
import * as ReactDOM from "react-dom";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";
import NewDungeonCard from "../components/NewDungeonCard";
import Avatar from "@material-ui/core/Avatar";
import CartTable from "../components/CartTable";
import Button from "@material-ui/core/Button";

function NewDungeonPage(){
    const [rows, setRows] = React.useState([]);
    const [total, setTotal] = React.useState(0);
    const [k, setK] = React.useState(0);
    const addToCart = (name,sku,price) => {
        const row = {key:k,name:name,sku:sku,price:price};
        setK(k=>k+1);
        setRows(rows => [...rows,row]);
        setTotal(total=>total+price);
    }

    const removeFromCart = (row) => {
        setTotal(total=>total-row.price);
        setRows(rows=>rows.filter(e=>e !== row)); 
    }
    
    return <React.Fragment>
             <Grid container direction="column" alignItems="center" spacing="1">
        <Grid item xs={12}>
          <Typography variant="h1">New Dungeon</Typography>
        </Grid>

      <Grid container direction="row" spacing={2}>
        <Grid item xs={6}>
          <Grid container direction="column" spacing={2} align="right">
            <NewDungeonCard onClick={addToCart} title="Free Dungeon" price={0} h5="4 person occupancy" body2="For you and three cellmates" sku="0"/>
            <NewDungeonCard onClick={addToCart} title="Micro Dungeon" price={2} h5="10 person occupancy" body2="At most 10 detainees can inhabit this space" sku="1"/>
            <NewDungeonCard onClick={addToCart} title="Small Dungeon" price={10} h5="100 person occupancy" body2="100 souls can dwell here together" sku="3"/>
            <NewDungeonCard onClick={addToCart} title="Medium Dungeon" price={20} h5="1000 person occupancy" body2="Where 1000 beings mingle to their delight" sku="4"/>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Card>
            <CardHeader title="Cart" align="right"/>
            <CardContent>
              <Grid container spacing={2} direction="column" align="right">
                <Grid item>
                  <CartTable rows={rows} total={total} onClickRow={removeFromCart}/>
                </Grid>
                <Grid>
                  <Button variant="contained">Checkout</Button>
                </Grid>
            </Grid>
            </CardContent>
          </Card>
        </Grid>
    </Grid>
    </Grid>
    </React.Fragment>
}

export default NewDungeonPage
