import React from 'react';
import { connect } from 'react-redux';
import Vault from './Vault'
import { Grid, Card, CardContent, CardActions, IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    cardContent: {
        flexGrow: 1,
        textAlign: "center",
    },
    cardActions: {
        justifyContent: "flex-end"
    },
})

function Folder(props) {
    const classes = useStyles();

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