import React, { useState } from 'react';
import { connect } from 'react-redux';
import Vault from './Vault'
import { Grid } from '@material-ui/core'
import VaultForm from './Forms/VaultForm';

function Folder(props) {
    const filteredVaults = props.vaults.filter(vault => vault.folder === props.id)

    const [dialog, setDialog] = useState(0);
    const openDialog = (id) => {
        setDialog(id)
    }
    const closeDialog = () => setDialog(0)

    const vaults = filteredVaults.map(vault => (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={vault.id}>
            <div className="vault">
                <Vault {...vault} onEdit={openDialog} />
            </div>
        </Grid>
    ))

    return (
        <>
            <Grid container spacing={4}>
                {vaults}
            </Grid>
            <VaultForm open={Boolean(dialog)} onClose={closeDialog} vault={dialog}/>
        </>
    )
}

const mapState = state => ({
    vaults: state.vaults,
})

export default connect(mapState, {})(Folder);