import * as React from "react";
import * as ReactDOM from "react-dom";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";
import TableFooter from "@material-ui/core/TableFooter";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import PropTypes, {InferProps} from "prop-types";

function ManageableDungeonsTable({rows}:InferProps<typeof ManageableDungeonsTable.propTypes>){

    return(
        <React.Fragment>
          <TableContainer>
            <Table>
              <TableHead>
              <TableRow>
                <TableCell>Dungeon Name</TableCell>
                <TableCell>Dungeon ID</TableCell>
                <TableCell>Renewal Date</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => {
                    return (
                        <TableRow>
                          <TableCell>{row.dungeonName}</TableCell>
                          <TableCell>{row.dungeonID}</TableCell>
                          <TableCell>{row.renewalDate}</TableCell>
                          <TableCell>{row.price}</TableCell>
                        </TableRow>
                    )
                })}
              </TableBody>
              <TableFooter>
              </TableFooter>
            </Table>
          </TableContainer>
        </React.Fragment>
    )
}

ManageableDungeonsTable.propTypes = {
    rows:PropTypes.array.isRequired,
}

export default ManageableDungeonsTable
