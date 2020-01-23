import React, { useState } from 'react';
import { Grid, Link, IconButton, Dialog, DialogContent, DialogActions, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import CodeIcon from '@material-ui/icons/Code';
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

    const [dialog, setDialog] = useState(false)
    const showDialog = () => setDialog(true)
    const closeDialog = () => setDialog(false)

    const redirectAbout = () => history.push('/about/')

    return (
        <>
            <Grid className={classes.footer} container>
                <Grid className={classes.left}>
                    <span onClick={redirectAbout}>About Us</span>
                    <Link href="https://github.com/N3onFrost" color="inherit"><IconButton color="inherit"><GitHubIcon /></IconButton></Link>
                    <Link href="https://www.linkedin.com/in/vatsal-patel-b95443198/" color="inherit"><IconButton color="inherit" ><LinkedInIcon /></IconButton></Link>
                    <IconButton color="inherit" onClick={showDialog} ><EmailIcon /></IconButton>
                </Grid>
                <Grid className={classes.right}>
                    <IconButton color="inherit"><CodeIcon /></IconButton>
                    <span>Developed by Vatsal Patel</span>
                </Grid>
            </Grid>
            <Dialog open={dialog} onClose={closeDialog} maxWidth="xs" fullWidth>
                <DialogContent>
                    <Typography variant="h6">My E-mail Address: n3onfrost@gmail.com</Typography>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={closeDialog}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Footer;