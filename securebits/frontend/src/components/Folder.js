import React from 'react';
import { connect } from 'react-redux';
import Vault from './Vault'
import { Grid } from '@material-ui/core'

function Folder(props) {
    const filteredVaults = props.vaults.filter(vault => vault.folder === props.id)

    const vaults = filteredVaults.map(vault => (
        <Grid item xs="12" sm="12" md="4" lg="3" xl="3">
            <div className="vault">
                <Vault {...vault} key={vault.name} />
            </div>
        </Grid>
    ))

    return (
        <>
            <Grid container spacing={4}>
                {vaults}
            </Grid>
        </>
    )
}

const mapState = state => ({
    vaults: state.vaults,
})

export default connect(mapState, {})(Folder);