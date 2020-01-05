import React, { useState } from 'react';
import { Button, Menu, MenuItem, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import FolderIcon from '@material-ui/icons/Folder';
import LoginForm from './Forms/LoginForm';
import SignupForm from './Forms/SignupForm';
import { connect } from 'react-redux';
import { logoutUser } from '../_actions/actions';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles({
    link: {
        marginLeft: 15,
    },
    logout: {
        color: "#c00",
    },
    avatar: {
        height: "1.5em",
        width: "1.5em",
        marginRight: "0.2em",
    },
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
                        <Button size="large" className={classes.link} onClick={handleClick} text>
                            <Avatar className={classes.avatar}>{props.user.first_name[0]}</Avatar>{props.user.first_name} {props.user.last_name} <ExpandMoreIcon />
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
                            <MenuItem onClick={() => { handleClose(); props.history.push("/folder") }}><FolderIcon />Folders</MenuItem>
                            <MenuItem onClick={() => { handleClose(); props.history.push("/settings") }}><SettingsIcon /> Settings</MenuItem>
                            <MenuItem onClick={() => { handleClose(); props.logoutUser() }} className={classes.logout}><ExitToAppIcon /> Logout</MenuItem>
                        </Menu>
                        <LoginForm open={login} onClose={closeLogin} />
                        <SignupForm open={signup} onClose={closeSignup} />
                    </>
            }
        </>
    )
}

const mapStateToProps = state => ({
    user: state.user,
})

export default withRouter(connect(mapStateToProps, { logoutUser })(User));