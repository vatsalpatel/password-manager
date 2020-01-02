import React, { useState } from 'react';
import { Container, Paper, Typography, Button, Dialog, DialogContent, DialogActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import FolderForm from './Forms/FolderForm';
import { deleteFolder } from '../_actions/actions';
import { Redirect } from 'react-router-dom';

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

    const [del, setDel] = useState(0);
    const openDelete = id => setDel(id);
    const closeDelete = () => setDel(0);

    return (
        <>
            { props.token ? null : <Redirect to="/" /> }
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
                            <Button variant="outlined" color="secondary" className={classes.btn} onClick={() => openDelete(folder.id)}>Delete</Button>
                        </div>
                    </Paper>
                ))}
            </Container>
            <Dialog open={Boolean(del)} onClose={closeDelete}>
                <DialogContent>
                    {`Deleteing this folder will delete all items inside it.`}
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" color="primary" onClick={closeDelete}>Cancel</Button>
                    <Button variant="contained" color="secondary" onClick={() => { props.deleteFolder(del); closeDelete() }}>Delete</Button>
                </DialogActions>
            </Dialog>
            <FolderForm open={Boolean(dialog)} folder={dialog} onClose={closeDialog} />
        </>
    )
}

const mapStateToProps = state => ({
    folders: state.folders,
    token: state.token,
})

export default connect(mapStateToProps, { deleteFolder })(FolderPage);