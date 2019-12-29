import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LoginForm from './Forms/LoginForm';
import SignupForm from './Forms/SignupForm';
import { connect } from 'react-redux';
import { logoutUser } from '../_actions/actions';

const useStyles = makeStyles({
    link: {
        marginLeft: 15,
    },
    logout: {
        color: "#c00",
    }
})

function User(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null)
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [login, setLogin] = useState(false);
    const openLogin = () => {
        setLogin(true)
    }
    const closeLogin = () => {
        setLogin(false)
    }
    
    const [signup, setSignup] = useState(false);
    const openSignup = () => {
        setSignup(true)
    }
    const closeSignup = () => {
        setSignup(false)
    }

    return (
        <>
            {
                props.user.username === undefined ?
                    <>
                        <Button variant="outlined" color="primary" className={classes.link} onClick={openLogin} >Log In</Button>
                        <Button variant="contained" color="primary" className={classes.link} onClick={openSignup}>Sign Up</Button>
                    </> :
                    <>
                        <Button size="large" className={classes.link} onClick={handleClick}>
                            {props.user.first_name} {props.user.last_name} <ExpandMoreIcon />
                        </Button>
                        <Menu
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                            transformOrigin={{ vertical: "top", horizontal: "center" }}
                            getContentAnchorEl={null}
                        >
                            <MenuItem onClick={handleClose}><AccountBoxIcon />Profile</MenuItem>
                            <MenuItem onClick={handleClose}><SettingsIcon /> Settings</MenuItem>
                            <MenuItem onClick={handleClose} className={classes.logout} onClick={props.logoutUser}><ExitToAppIcon /> Logout</MenuItem>
                        </Menu>
                    </>
            }
            <LoginForm open={login} onClose={closeLogin} />
            <SignupForm open={signup} onClose={closeSignup} />
        </>
    )
}

const mapStateToProps = state => ({
    user: state.user,
})

export default connect(mapStateToProps, { logoutUser })(User);