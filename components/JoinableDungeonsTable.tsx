import * as React from "react";
import * as ReactDOM from "react-dom";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import Typography from "@material-ui/core/Typography";

function JDTablePlaceholder(){
    return (
        <React.Fragment>
          <Typography variant="h3">You haven't visited any dungeons yet</Typography>
        </React.Fragment>
    )
}

function JDTable({rows}){
    return <React.Fragment>
             <TableContainer>
               <Table>
                 <TableHead>
                   <TableRow>
                     <TableCell>Dungeon Name</TableCell>
                     <TableCell># of Occupants</TableCell>
                   </TableRow>
                 </TableHead>
                 <TableFooter>
                 </TableFooter>
               </Table>
             </TableContainer>
           </React.Fragment>
}

function JoinableDungeonsTable({rows=[]}){

    return(
        <React.Fragment>
        { rows.count > 0 ? <JDTable rows={rows}/> : <JDTablePlaceholder/>
          }
        </React.Fragment>
    )
}

export default JoinableDungeonsTable
