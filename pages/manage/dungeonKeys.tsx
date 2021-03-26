import * as React from "react"
import * as ReactDOM from "react-dom"
import {
    Grid,
    Typography,
    ButtonGroup,
    Button,
} from "@material-ui/core"
import DungeonKeysTable from "../../components/DungeonKeysTable"

function DungeonKeys({query}){

    const newKeys = () => {

    }

    const editKeys = () => {

    }

    const shareKeys = () => {

    }

    const deleteKeys = () => {

    }

    return (
        <React.Fragment>
          <Grid container direction="column" alignItems="center" spacing={1}>
            <Grid item>
              <Typography variant="h1">Dungeon Keys</Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">{query.dungeonNumber}</Typography>
            </Grid>
            <Grid item>
              <DungeonKeysTable/>
            </Grid>
            <Grid item>
              <ButtonGroup variant="contained">
                <Button>New</Button>
                <Button>Edit</Button>
                <Button>Share</Button>
                <Button>Delete</Button>
              </ButtonGroup>
            </Grid>
          </Grid>
        </React.Fragment>
    )
}

export default DungeonKeys
