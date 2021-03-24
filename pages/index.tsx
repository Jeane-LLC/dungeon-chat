import * as React from "react";
import * as ReactDOM from "react-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from 'next/link'

function HomePage(){
    return <React.Fragment>
             <Grid container direction="column" alignItems="center">
               <Grid item>
                 <Typography variant="h1">
                   dungeon.chat
                 </Typography>
               </Grid>
               <Grid item>
                 <Button>
                   <Link href="/join">
                     Join
                   </Link>
                 </Button>
               </Grid>
               <Grid item>
                 <Button>
                   <Link href="/new">
                     New
                   </Link>
                 </Button>
               </Grid>
               <Grid item>
                 <Button>
                   <Link href="/manage">
                     Manage
                   </Link>
                 </Button>
               </Grid>
             </Grid>
           </React.Fragment>
}

export default HomePage
