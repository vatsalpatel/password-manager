import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@material-ui/core';
import { grey, indigo, blueGrey, blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import editimg from '../editimg.jpg'
import vaultimg from '../vaultimg.jpg'

const useStyles = makeStyles({
    back: {
        backgroundColor: grey[300],
    },
    wrapper: {
        marginBottom: "10em",
        display: "flex",
        justifyContent: "center",
    },
    title: {
        marginTop: "1em",
        color: indigo[900],
    },
    topics: {
        color: grey[700],
    },
    cardTitle: {
        textAlign: "center",
    },
    margin: {
        marginTop: "5em",
    },
    padding: {
        padding: "0.5em",
    }
})

function About(props) {
    const classes = useStyles();
    return (
        <Container maxWidth="xl" className="back" >
            <Container maxWidth="sm">
                <video autoPlay loop width="100%" height="100%">
                    <source src="https://d38muu3h4xeqr1.cloudfront.net/website/static/DL-255/videos/animation-hero/homepage-desktop-video.webm" />
                </video>
            </Container>
            <Container maxWidth="lg" className={classes.wrapper}>
                <Grid container align="center" spacing={6}>
                    <Grid item xs={12}>
                        <Typography variant="h4" className={classes.title}>
                            Passwords Are Frustrating...
                    </Typography>
                    </Grid>
                    <Grid sm={6} md={4}>
                        <Typography variant="h5" className={classes.topics}>
                            Weak Passwords
                    </Typography>
                        <Typography variant="h6" className={classes.topics}>
                            Most people use short and weak password, Which are easy to crack.
                    </Typography>
                    </Grid>
                    <Grid sm={6} md={4}>
                        <Typography variant="h5" className={classes.topics}>
                            Reused Passwords
                    </Typography>
                        <Typography variant="h6" className={classes.topics}>
                            Most people use same password for more than one site, increasing security risks.
                    </Typography>
                    </Grid>
                    <Grid sm={6} md={4}>
                        <Typography variant="h5" className={classes.topics}>
                            Hard to remember
                    </Typography>
                        <Typography variant="h6" className={classes.topics}>
                            Strong passwords are hard to remember, and resetting them each time is inconvenient
                    </Typography>
                    </Grid>
                </Grid>
            </Container>
            <Grid container spacing={5}>
                <Grid sm={6} md={6}>
                    <img src={vaultimg} width="95%" />
                </Grid>
                <Grid sm={6} md={6}>
                    <img src={editimg} width="95%" />
                </Grid>
            </Grid>
            <Container maxWidth="lg" className={classes.wrapper}>
                <Grid container align="center" spacing={6} className={classes.margin}>
                    <Grid item xs={12}>
                        <Typography variant="h4" className={classes.title}>
                            Never Forget Another Password...
                    </Typography>
                    </Grid>
                    <Grid sm={6} md={4}>
                        <Typography variant="h5" className={classes.topics}>
                            Secure Password Storage
                    </Typography>
                        <Typography variant="h6" className={classes.topics}>
                            Passwords are encrypted and decrypted on client using key derived from your password.
                    </Typography>
                    </Grid>
                    <Grid sm={6} md={4}>
                        <Typography variant="h5" className={classes.topics}>
                            Easy And Convenient
                    </Typography>
                        <Typography variant="h6" className={classes.topics}>
                            Very simple and easy to use, can be used anywhere and anytime.
                    </Typography>
                    </Grid>
                    <Grid sm={6} md={4}>
                        <Typography variant="h5" className={classes.topics}>
                            Organize Passwords Easily
                    </Typography>
                        <Typography variant="h6" className={classes.topics}>
                            Passwords can be organized into folders for categorization and convenience.
                    </Typography>
                    </Grid>
                </Grid>
            </Container>
            <Grid container className={classes.wrapper} spacing={5}>
                <Grid xs={12} md={5}>
                    <Card raised>
                        <CardContent className={classes.topics}>
                            <div className={classes.cardTitle}>
                                <Typography variant="h4" className={classes.padding}>
                                    Encryption
                                </Typography>
                            </div>
                            <Typography paragraph align="justify">
                                We use Advanced Encryption Standard to encrypt your username and password.
                                Encryption is done on the client meaning that username and password 
                                are already encrypted even beofre they leave your browser.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid md={1} ></Grid>
                <Grid xs={12} md={5}>
                    <Card raised>
                        <CardContent className={classes.topics}>
                            <div className={classes.cardTitle}>
                                <Typography variant="h4" className={classes.padding}>
                                    Security
                                </Typography>
                            </div>
                            <Typography paragraph align="justify">
                                We process your password through 100 rounds of PBKDF2
                                (Password Based Key Derivation Function 2) with salting
                                from SHA256 making it practically impossible to break.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default About;