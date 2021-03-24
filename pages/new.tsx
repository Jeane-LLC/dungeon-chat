import * as React from "react";
import * as ReactDOM from "react-dom";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";
import NewDungeonCard from "../components/NewDungeonCard";
function NewPage(){
    return <div>
    <Grid container direction="column" alignItems="center" spacing="1">
      <Grid item>
        <Typography variant="h1">New Dungeon</Typography>
      </Grid>
      <NewDungeonCard title="Free Dungeon" h2="$0 per month" h5="Maximum 4 person occupancy" body2="Chat with up to three other people!" sku="0"/>
      <NewDungeonCard title="Micro Dungeon" h2="$2 per month" h5="Maximum 10 person occupancy" body2="At most 10 people can inhabit this space." sku="1"/>
      <NewDungeonCard title="Small Dungeon" h2="$10 per month" h5="Maximum 100 person occupancy" body2="100 souls can dwell here together." sku="3"/>
      <NewDungeonCard title="Medium Dungeon" h2="$20 per month" h5="Maximum 1000 person occupancy" body2="Where 1000 beings mingle to their delight." sku="4"/>
    </Grid>
    </div>
}

export default NewPage
