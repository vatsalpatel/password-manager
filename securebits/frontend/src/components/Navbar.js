import React from 'react';
import { AppBar, Toolbar, Typography, Snackbar, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import User from './User';
import { connect } from 'react-redux';
import { displayError, clearError } from '../_actions/actions';

const useStyles = makeStyles({
    toolbar: {
        flexWrap: 1,
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        marginLeft: 15,
        textDecoration: "none",
        color: "black",
    },
    icon: {
        color: "white",
    },
})

function Navbar(props) {
    const classes = useStyles();

    const handleClose = () => {
        props.clearError()
    }

    return (
        <>
            <AppBar position="static" color="default">
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h5" color="primary" className={classes.toolbarTitle}>
                        SecureBits
                </Typography>
                    <nav>
                        <Link className={classes.link} to="/">Home</Link>
                        <Link className={classes.link} to="/about">About</Link>
                    </nav>
                    <User />
                </Toolbar>
            </AppBar>
            <Snackbar 
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
                open={Boolean(props.status.code)}
                onClose={handleClose}
                autoHideDuration={5000}
                message={<span>{props.status.msg}</span>}
                action={
                    <IconButton onClick={handleClose} className={classes.icon}><CloseIcon /></IconButton>
                }
            />
        </>
    )
}

const mapStateToProps = state => ({
    status: state.status
})

export default connect(mapStateToProps, { displayError, clearError })(Navbar);