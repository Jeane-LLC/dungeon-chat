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
import PropTypes, {InferProps} from "prop-types";

function DungeonKeysTable({rows}:InferProps<typeof DungeonKeysTable.propTypes>){

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
        })
        }
            </Table>
          </TableContainer>
        </React.Fragment>
    )
}

DungeonKeysTable.propTypes = {
    rows: PropTypes.array.isRequired,
}

export default DungeonKeysTable
