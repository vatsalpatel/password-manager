import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { indigo } from '@material-ui/core/colors';

const useStyles = makeStyles( theme => ({
    wrapper: {
        display: "flex",
    },
    title: {
        color: indigo[900],
        marginBottom: "0.5em",
    },
    main: {
        alignSelf: "center",
    }
}))

function About(props) {
    const classes = useStyles();
    return (
        <>
            <Container className={classes.wrapper} maxWidth="md">
                <Grid xs={12} className={classes.main}>
                    <Typography variant="h4" className={classes.title}>What is Secure Bits?</Typography>
                    <Typography>
                        SecureBits is a password manager made with security in mind.
                        Users have to remember only one master password which will unlock 
                        all of their other passwords securely placed into vaults.
                    </Typography>
                </Grid>
                <Grid xs={12}>
                    <img src="/static/pm4.png" width="100%" />
                </Grid>
            </Container>
        </>
    )
}

export default About;