import * as React from "react";
import * as ReactDOM from "react-dom";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import JoinableDungeonsTable from "../components/JoinableDungeonsTable"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import Button from "@material-ui/core/Button"


function JoinPage(){
    return <div>
             <Grid container direction="column" spacing={1} alignItems="center">
      <Grid item>
        <Typography variant="h1">Join dungeons</Typography>
      </Grid>
               <Grid item>
                 <JoinableDungeonsTable/>
               </Grid>
               <Grid>
                 <ButtonGroup variant="contained">
                  <Button>Enter</Button>
                  <Button>Rename</Button>
                  <Button>Forget</Button>
                </ButtonGroup>
               </Grid>
    </Grid>
    </div>
}

export default JoinPage
