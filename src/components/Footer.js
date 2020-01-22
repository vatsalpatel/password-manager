import React from 'react';
import { Grid, IconButton, Link, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
    footer: {
        backgroundColor: "#212121",
        color: "white",
        padding: "1em",
        display: "flex",
        flexDirection: "row",
    },
    left: {
        flexDirection: "row",
        flexGrow: 1,
        marginLeft: "2em",
    },
    right: {
        marginRight: "2em",
    },
    tooltip: {
        fontSize: "1em",
    }
})

function Footer(props) {
    const classes = useStyles()
    let history = useHistory()

    const redirectAbout = () => history.push('/about/')

    return (
        <>
            <Grid className={classes.footer} container>
                <Grid className={classes.left}>
                    <span onClick={redirectAbout}>About Us</span>
                    <Link color="inherit" href="https://www.github.com/n3onfrost"><IconButton color="inherit"><GitHubIcon /></IconButton></Link>
                    <Link color="inherit" href="https://www.linkedin.com/"><IconButton color="inherit"><LinkedInIcon /></IconButton></Link>
                    <Tooltip title="n3onfrost@gmail.com" className={classes.tooltip} arrow><IconButton color="inherit"><EmailIcon /></IconButton></Tooltip>
                </Grid>
                <Grid className={classes.right}>
                    <span>Developed by Vatsal Patel</span>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;