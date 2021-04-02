import * as React from "react";
import * as ReactDOM from "react-dom";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ManageableDungeonsTable from "../components/ManageableDungeonsTable";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

function ManagePage(){
    return <React.Fragment>
             <Grid container direction="column" spacing={1} alignItems="center">
               <Grid item>
                 <Typography variant="h1">Manage dungeons</Typography>
               </Grid>
               
                 <Paper>
                 <Grid item>
                   <ManageableDungeonsTable rows={[]}/>
                 </Grid>
                 <Grid item>
                   <ButtonGroup variant="contained">
                     <Button>Keys</Button>
                     <Button>Rename</Button>
                     <Button>Delete</Button>
                   </ButtonGroup>
                 </Grid>
                 </Paper>
             </Grid>
           </React.Fragment>
}

export default ManagePage
