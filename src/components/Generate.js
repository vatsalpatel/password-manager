import React, { useState } from 'react';
import { Dialog, DialogContent, DialogActions, Slider, Button, TextField, IconButton, Tooltip, Grid, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FileCopyIcon from '@material-ui/icons/FileCopy'
import CachedIcon from '@material-ui/icons/Cached';


const useStyles = makeStyles({
    slider: {
        marginTop: "2em",
        width: "90%",
    },
    text: {
        marginTop:"0.5em",
        width: "80%",
    },
    card1: {
        width: "30%",
        height: "0.5em",
    },
    card2: {
        width: "30%",
        height: "0.5em",
    },
    card3: {
        width: "30%",
        height: "0.5em",
    },
})

function Generate(props) {
    const classes = useStyles();
    const {
        open,
        onClose
    } = props
    const [len, setLen] = useState(12)

    const handleChange = (e, v) => {
        setLen(v)
    }

    return (
        <>
            <Dialog open={open} maxWidth="xs" fullWidth onClose={onClose}>
                <DialogContent>
                    <Grid container justify="center">
                        <Slider
                            className={classes.slider}
                            defaultValue={len}
                            min={1}
                            max={50}
                            marks={[{value:1, label:1}, {value:50, label:50}]}
                            valueLabelDisplay="on"
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid container justify="center">
                        <Card className={classes.card1}></Card>
                        <Card className={classes.card2}></Card>
                        <Card className={classes.card3}></Card>
                    </Grid>
                    <Grid container justify="center" >
                        <TextField className={classes.text} InputProps={{readOnly: true}}/>
                        <Tooltip title="Copy"><IconButton><FileCopyIcon /></IconButton></Tooltip>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} variant="outlined" color="primary">Close</Button>
                    <Button onClick={onClose} variant="contained" color="primary">Generate</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Generate;