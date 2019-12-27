import React from 'react';
import { connect } from 'react-redux';
import Vault from './Vault'
import { Grid, Card, CardContent, CardActions, IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function Folder(props) {
    console.log(props.folder.id)
    const folderVaults = props.vaults.filter(vault => { return vault.folder === props.folder.id })
    const vaults = folderVaults.map(vault => {
        return (
            <div className="vault" style={{ padding: 5 }}>
                <Grid item>
                    <Card style={{ padding: 10 }}>
                        <CardContent>
                            <Vault vault={vault} />
                        </CardContent>
                        <CardActions style={{ justifyContent: "flex-end" }}>
                            <IconButton color="primary"><EditIcon /></IconButton>
                            <IconButton color="secondary"><DeleteIcon /></IconButton>
                        </CardActions>
                    </Card>
                </Grid>
            </div>
        )
    })
    console.log(props)
    return (
        <>
            <Grid container spacing={1} direction="row" justify="flex-start">
                {vaults}
            </Grid>
        </>
    )
}

const mapState = state => ({
    vaults: state.vaults,
})

export default connect(mapState, {})(Folder);