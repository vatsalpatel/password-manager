import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

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

    return (
        <>
            {
                props.username === undefined ?
                    <>
                        <Button variant="outlined" color="primary" className={classes.link}>Log In</Button>
                        <Button variant="contained" color="primary" className={classes.link}>Sign Up</Button>
                    </> :
                    <>
                        <Button size="large" className={classes.link} onClick={handleClick}>
                            {props.first_name} {props.last_name} <ExpandMoreIcon />
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
                            <MenuItem onClick={handleClose} className={classes.logout}><ExitToAppIcon /> Logout</MenuItem>
                        </Menu>
                    </>
            }
        </>
    )
}

export default User;