import React from 'react';
import { connect } from 'react-redux';
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
                    Secure Bits
                </Typography>
                <nav>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link}>Home</Link>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link}>About</Link>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link}>Contact</Link>
                </nav>
                <User {...props.user}/>
            </Toolbar>
        </AppBar>
    )
}

const mapStateToProps = state => ({
    user: state.user,
})

export default connect(mapStateToProps, null)(Navbar);