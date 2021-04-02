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
import PropTypes, {InferProps} from "prop-types";

function JDTablePlaceholder(){
    return (
        <React.Fragment>
          <Typography variant="h3">You haven't visited any dungeons yet</Typography>
        </React.Fragment>
    )
}

function JDTable({rows}:InferProps<typeof JDTable.propTypes>){
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

JDTable.propTypes = {
    rows:PropTypes.array.isRequired,
}

function JoinableDungeonsTable({rows=[]}:InferProps<typeof JoinableDungeonsTable.propTypes>){

    return(
        <React.Fragment>
        { rows.length > 0 ? <JDTable rows={rows}/> : <JDTablePlaceholder/>
          }
        </React.Fragment>
    )
}

JoinableDungeonsTable.propTypes = {
    rows:PropTypes.array.isRequired,
}

export default JoinableDungeonsTable
