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

    console.log(props)

    const filteredVaults = props.vaults.filter(vault => vault.folder === props.id)

    const vaults = filteredVaults.map(vault => (
        <Grid item md="4" lg="3" xl="2">
            <div className="vault">
                <Card>
                    <CardContent className={classes.cardContent}>
                        <Vault {...vault} key={vault.name} />
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                        <IconButton size="medium" color="primary"><EditIcon /></IconButton>
                        <IconButton size="medium" color="secondary"><DeleteIcon /></IconButton>
                    </CardActions>
                </Card>
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