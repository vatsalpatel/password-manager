import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    wrapper: {
        display: "flex",
        justifyContent: "center",
    }
})

function About(props) {
    const classes = useStyles();
    return (
        <Container maxWidth="md" className={classes.wrapper}>
            <Typography>
                
            </Typography>
        </Container>
    )
}

export default About;