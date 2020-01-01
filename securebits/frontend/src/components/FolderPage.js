import React, { useState } from 'react';
import { Container, Paper, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import FolderForm from './Forms/FolderForm';
// import {} from '../_action/actions';

const useStyles = makeStyles({
    paper: {
        display: "flex",
        alignItems: "center",
        height: 50,
        margin: 15,
        padding: 15,
    },
    text: {
        display: "flex",
        flexGrow: 1,
    },
    btn: {
        marginLeft: 15,
    },
    addButton: {
        display: "flex",
        margin: 15,
        justifyContent: "center",
    }
});

function FolderPage(props) {
    const classes = useStyles();

    const [dialog, setDialog] = useState(0);
    const openDialog = id => setDialog(id);
    const closeDialog = () => setDialog(0);

    return (
        <>
            <Container maxWidth="lg">
                <div className={classes.addButton}>
                    <Button variant="contained" color="primary" onClick={() => openDialog(-1)}>Add Folder</Button>
                </div>
                {props.folders.map(folder => (
                    <Paper className={classes.paper} key={folder.id}>
                        <Typography className={classes.text}>
                            {folder.name}
                        </Typography>
                        <div>
                            <Button variant="contained" color="primary" className={classes.btn} onClick={() => openDialog(folder.id)}>Edit</Button>
                            <Button variant="outlined" color="secondary" className={classes.btn}>Delete</Button>
                        </div>
                    </Paper>
                ))}
            </Container>
            <FolderForm open={Boolean(dialog)} folder={dialog} onClose={closeDialog} />
        </>
    )
}

const mapStateToProps = state => ({
    folders: state.folders
})

export default connect(mapStateToProps, {})(FolderPage);