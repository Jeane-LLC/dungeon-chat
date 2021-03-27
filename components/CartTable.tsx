import * as React from "react";
import * as ReactDOM from "react-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableFooter from "@material-ui/core/TableFooter";

function CartTable(props){
    const {rows,total=0, onClickRow} = props;
    return <React.Fragment>
             <TableContainer>
               <Table>
                 <TableHead>
                   <TableRow>
                     <TableCell>Dungeon</TableCell>
                     <TableCell align="right">Dollars per Month</TableCell>
                   </TableRow>
                 </TableHead>
                 <TableBody>
                   {rows.map((row) => (
        <TableRow key={row.key} hover={true} onClick={() => onClickRow(row)}>
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="right">{"$"+row.price}</TableCell>
        </TableRow>
    ))}
                 </TableBody>
                 <TableFooter>
                   <TableRow>
                     <TableCell>
                       Total
                     </TableCell>
                     <TableCell align="right">
                       {"$" + total + " per month"}
                     </TableCell>
                   </TableRow>
                 </TableFooter>
               </Table>
             </TableContainer>
           </React.Fragment>
}

export default CartTable
