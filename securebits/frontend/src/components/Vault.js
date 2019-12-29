import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardActions, IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

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
                    <IconButton size="small" color="secondary"><DeleteIcon /></IconButton>
                </CardActions>
            </Card>
        </>
    )
}

export default Vault;