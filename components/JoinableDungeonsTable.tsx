import * as React from "react";
import * as ReactDOM from "react-dom";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";
import TableFooter from "@material-ui/core/TableFooter";
import TableHead from "@material-ui/core/TableHead";


function JoinableDungeonsTable(props){

    return(
        <React.Fragment>
          <TableContainer component={Paper}>
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
    )
}

export default JoinableDungeonsTable
