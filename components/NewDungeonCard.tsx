import * as React from "react";
import * as ReactDOM from "react-dom";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper"
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"


function NewDungeonCard(props){
    
    const {title,header,price,h5,body2,sku,onClick} = props;
    return <React.Fragment>
                   <Grid item>
                    
                     <Button component={Paper} onClick={()=>onClick(title,sku,price)} style={{"text-transform":"none"}}>
                         <Card elevation="0">
                           <CardHeader title={title}/>
                           <CardContent>
                             <Typography variant="h2">{"$"+price+"/month"}</Typography>
                             <Typography variant="h5">{h5}</Typography>
                             <Typography variant="body2">{body2}</Typography>
                           </CardContent>
                         </Card>
                       </Button>
                    
                   </Grid>
               
           </React.Fragment>
}

export default NewDungeonCard
