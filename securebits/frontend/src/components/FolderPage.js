import React from 'react';
import { Container, Paper, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
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

    return (
        <>
            <Container maxWidth="lg">
                <div className={classes.addButton}>
                    <Button variant="contained" color="primary">Add Folder</Button>
                </div>
                {props.folders.map(folder => (
                    <Paper className={classes.paper} key={folder.id}>
                        <Typography className={classes.text}>
                            {folder.name}
                        </Typography>
                        <div>
                            <Button variant="outlined" color="primary" className={classes.btn}>Edit</Button>
                            <Button variant="contained" color="secondary" className={classes.btn}>Delete</Button>
                        </div>
                    </Paper>
                ))}
            </Container>
        </>
    )
}

const mapStateToProps = state => ({
    folders: state.folders
})

export default connect(mapStateToProps, {})(FolderPage);