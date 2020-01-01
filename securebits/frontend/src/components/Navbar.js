import React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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
                    <Link variant="button" color="textPrimary" href="/vault" className={classes.link}>Vault</Link>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link}>About</Link>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link}>Contact</Link>
                </nav>
                <User />
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;