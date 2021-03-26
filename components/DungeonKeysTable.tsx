import * as React from "react"
import * as ReactDOM from "react-dom"
import {
    Table,
    TableContainer,
    TableRow,
    TableHead,
    TableFooter,
    TableCell,
} from "@material-ui/core"

function DungeonKeysTable({rows}){

    return (
        <React.Fragment>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    Value
                  </TableCell>
                  <TableCell>
                    Last Used
                  </TableCell>
                  <TableCell>
                    Number of users
                  </TableCell>
                </TableRow>
              </TableHead>
        { rows.map((row)=> {
            return (
                <TableRow>
                  <TableCell>row.value</TableCell>
                  <TableCell>row.lastUsed</TableCell>
                  <TableCell>row.numberOfUsers</TableCell>
                </TableRow>
            )
        }
        }
            </Table>
          </TableContainer>
        </React.Fragment>
    )
}


export default DungeonKeysTable
