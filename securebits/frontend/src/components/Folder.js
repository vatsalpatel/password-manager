import React from 'react';
import { connect } from 'react-redux';
import Vault from './Vault'
import { Grid, Card, CardContent, CardActions } from '@material-ui/core'

function Folder(props) {
    console.log(props.folder.id)
    const folderVaults = props.vaults.filter(vault => { return vault.folder === props.folder.id })
    const vaults = folderVaults.map(vault => {
        return (
            <div className="vault" style={{padding: 10}}>
                <Card>
                    <CardContent>
                        <Vault vault={vault} />
                    </CardContent>
                    <CardActions>

                    </CardActions>
                </Card>
            </div>
        )
    })
    console.log(props)
    return (
        <>
            <Grid container direction="row" justify="flex-start">
                {vaults}
            </Grid>
        </>
    )
}

const mapState = state => ({
    vaults: state.vaults,
})

export default connect(mapState, {})(Folder);