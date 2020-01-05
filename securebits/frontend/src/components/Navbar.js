import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import User from './User';

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
})

function Navbar(props) {
    const classes = useStyles();

    return (
        <AppBar position="static" color="default">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" color="primary" className={classes.toolbarTitle}>
                    SecureBits
                </Typography>
                <nav>
                    <Link className={classes.link} to="/">Home</Link>
                    <Link className={classes.link} to="/about">About</Link>
                    <Link className={classes.link} to="/contact">Contact</Link>
                </nav>
                <User />
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;