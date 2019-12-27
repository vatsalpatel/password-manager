import React from 'react';
import { connect } from 'react-redux';
import { AppBar, Toolbar, Typography, Button, Link} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
                <Typography variant="h6" color="primary" className={classes.toolbarTitle}>
                    Secure Bits
                </Typography>
                <nav>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link}>Home</Link>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link}>About</Link>
                    <Link variant="button" color="textPrimary" href="#" className={classes.link}>Contact</Link>
                </nav>
                {props.username === "" ?
                    <>
                        <Button variant="outlined" color="primary" className={classes.link}>Log In</Button>
                        <Button variant="contained" color="primary" className={classes.link}>Sign Up</Button>
                    </> :
                    <>

                    </>}
            </Toolbar>
        </AppBar>
    )
}

const mapStateToProps = state => ({
    user: state.user,
})

export default connect(mapStateToProps, null)(Navbar);