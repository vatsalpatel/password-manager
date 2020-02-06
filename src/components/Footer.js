import React from 'react';
import { Grid, Link, IconButton, Dialog, DialogContent, DialogActions, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import CopyrightIcon from '@material-ui/icons/Copyright';
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
        flexGrow: 1,
        marginLeft: "2em",
    },
    right: {
        marginRight: "2em",
    },
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
                    <Link href="https://github.com/N3onFrost" color="inherit"><IconButton color="inherit"><GitHubIcon /></IconButton></Link>
                    <Link href="https://www.linkedin.com/in/vatsal-patel-b95443198/" color="inherit"><IconButton color="inherit" ><LinkedInIcon /></IconButton></Link>
                    <Link href="mailto:n3onfrost@gmail.com" color="inherit"><IconButton color="inherit" ><EmailIcon /></IconButton></Link>
                </Grid>
                <Grid className={classes.right}>
                    <IconButton color="inherit"><CopyrightIcon /></IconButton>
                    <span>Copyright SecureBits 2019-2020</span>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;