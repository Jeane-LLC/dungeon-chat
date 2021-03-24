import * as React from "react";
import * as ReactDOM from "react-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from 'next/link'
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

function CookieAlert(props){
    return <MuiAlert elevation={6} variant="filled" {...props}/>
}

function HomePage(){

    const [open, setOpen] = React.useState(true);
    
    const handleClose = () => {
        setOpen(false);
    }
    
    return <React.Fragment>
             <Grid container direction="column" justify="center" alignItems="center" spacing={1}>
               <Grid item>
                 <Typography variant="h1">
                   dungeon.chat
                 </Typography>
               </Grid>
               <Grid item container direction="row" justify="center" spacing={1}>
               <Grid item>
                 <Link href="/join">
                   <Button variant="contained">
                     Join
                   </Button>
                 </Link>
               </Grid>
               <Grid item>
                 
                   <Link href="/new">
                     <Button variant="contained">New</Button>
                   </Link>
                 
               </Grid>
               <Grid item>
                   <Link href="/manage">
                     <Button variant="contained">Manage</Button>
                   </Link>
               </Grid>
               </Grid>
             </Grid>
             <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
               <CookieAlert severity="info" onClose={handleClose}>
                 This website uses cookies!<br/>Leave now or accept the terms
               </CookieAlert>
             </Snackbar>
           </React.Fragment>
}

export default HomePage
