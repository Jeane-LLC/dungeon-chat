import * as React from "react";
import * as ReactDOM from "react-dom";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ManagableDungeonsTable from "../components/ManagableDungeonsTable";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

function ManagePage(){
    return <React.Fragment>
             <Grid container direction="column" spacing={1} alignItems="center">
               <Grid item>
                 <Typography variant="h1">Manage</Typography>
               </Grid>
               
                 <Paper align="center">
                 <Grid item>
                   <ManagableDungeonsTable/>
                 </Grid>
                 <Grid item>
                   <ButtonGroup variant="contained">
                     <Button>Renew</Button>
                     <Button>Delete</Button>
                   </ButtonGroup>
                 </Grid>
                 </Paper>
             </Grid>
           </React.Fragment>
}

export default ManagePage
