import * as React from "react";
import * as ReactDOM from "react-dom";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import JoinableDungeonsTable from "../components/JoinableDungeonsTable"

function JoinPage(){
    return <div>
             <Grid container direction="column" spacing={1} alignItems="center">
      <Grid item>
        <Typography variant="h1">Join dungeons</Typography>
      </Grid>
               <Grid item>
                 <JoinableDungeonsTable/>
               </Grid>
    </Grid>
    </div>
}

export default JoinPage
