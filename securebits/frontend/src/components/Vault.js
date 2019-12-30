import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardActions, IconButton } from '@material-ui/core'
import { Dialog, DialogContent, DialogActions, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { deleteVault } from '../_actions/actions';

const useStyles = makeStyles({
    cardTitle: {
        flexGrow: 1,
        textAlign: "center",
    },
    cardContent: {
        flexGrow: 1,
    },
    cardActions: {
        justifyContent: "flex-end"
    },
})

function Vault(props) {
    const classes = useStyles();

    const [dialog, setDialog] = useState(false);
    const openDialog = () => setDialog(true)
    const closeDialog = () => setDialog(false)

    return (
        <>
            <Card variant="outlined">
                <CardContent className={classes.cardTitle}>
                    <Typography variant="h6">
                        {props.name}
                    </Typography>
                </CardContent>
                <CardContent className={classes.cardContent}>
                    Username: {props.username}
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <IconButton size="small" color="primary"><EditIcon /></IconButton>
                    <IconButton size="small" color="secondary" onClick={openDialog}><DeleteIcon /></IconButton>
                </CardActions>
            </Card>
            <Dialog open={dialog} onClose={closeDialog}>
                <DialogContent>
                    {`Are you sure you want to delete ${props.name} ?`}
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" color="primary" onClick={closeDialog}>Cancel</Button>
                    <Button variant="contained" color="secondary" onClick={() => {props.deleteVault(props.id); closeDialog()}}>Delete</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default connect(null, { deleteVault })(Vault);