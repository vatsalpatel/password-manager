import React, { useState, useEffect } from 'react';
import { Slider, TextField, IconButton, Tooltip, Grid, Card, Container, FormControlLabel, Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FileCopyIcon from '@material-ui/icons/FileCopy'
import CachedIcon from '@material-ui/icons/Cached';


const useStyles = makeStyles({
    container: {
        marginTop: "3em",
        flexDirection: "column"
    },
    slider: {
        width: "75%",
    },
    txt: {
        marginLeft: "1.5em",
        width: "10%",
    },
    boxes: {
        display: "flex",
        flexDirection: "column",
    },
    readonly: {
        width: "65%",
    },
    cards: {
        display: "flex",
        flexDirection: "row",
    },
    card: {
        height: "10px",
        width: "30%",
    },
})

const generatePass = (state, length) => {
    if (!(state.upper || state.lower || state.digits || state.symbols) || length < 4) {
        return "Invalid Options"
    }
    let options = {
        upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        lower: "abcdefghijklmnopqrstuvwxyz",
        digits: "0123456789",
        symbols: "!@#$%&*-+=_:;,.?/",
    }
    let r = ""
    for (let box in state) {
        if (state[box]) {
            r += options[box]
        }
    }
    let pass = ""
    for (let i = 0; i < length; i++) {
        pass += r[Math.floor(Math.random() * r.length)]
    }
    return pass
}

function Generate(props) {
    const classes = useStyles();

    const [pass, setPass] = useState("")
    const [len, setLen] = useState(16)
    const handleSlider = (e, v) => {
        setLen(v)
        setPass(generatePass(state, v))
    }
    const handleInput = (e) => {
        setLen(e.target.value === '' ? '' : Number(e.target.value))
        setPass(generatePass(state, e.target.value))
    }
    const handleBlur = () => {
        if (len < 4) {
            setLen(4)
        } else if (len > 50) {
            setLen(50)
        }
        setPass(generatePass(state, len))
    }

    const [state, setState] = useState({
        upper: true,
        lower: true,
        digits: true,
        symbols: true,
    })
    const handleCheckBox = name => event => {
        setState({ ...state, [name]: event.target.checked })
    }

    useEffect(() => {
        setPass(generatePass(state, len))
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Container maxWidth="xs">
                <Grid container justify="center" className={classes.container}>
                    <Grid item>
                        <TextField InputProps={{ readOnly: true }} className={classes.readonly} value={pass} />
                        <Tooltip title="Copy"><IconButton onClick={() => navigator.clipboard.writeText(pass)}><FileCopyIcon /></IconButton></Tooltip>
                        <Tooltip title="Generate"><IconButton onClick={() => handleBlur()}><CachedIcon /></IconButton></Tooltip>
                    </Grid>
                    <Grid item className={classes.cards}>
                        <Card className={classes.card} style={{ backgroundColor: pass.length ? pass.length <= 7 ? "orangered" : pass.length <= 15 ? "orange" : "limegreen" : "white" }}></Card>
                        <Card className={classes.card} style={{ backgroundColor: pass.length >= 8 ? pass.length <= 15 ? "orange" : "limegreen" : "white" }}></Card>
                        <Card className={classes.card} style={{ backgroundColor: pass.length >= 16 ? "limegreen" : "white" }}></Card>
                    </Grid>
                    <Grid item className={classes.inputs}>
                        <Slider className={classes.slider} value={typeof len === 'number' ? len : 0} onChange={handleSlider} min={4} max={50} />
                        <TextField className={classes.txt} value={len} onChange={handleInput} onBlur={handleBlur} type="number" />
                    </Grid>
                    <Grid item className={classes.boxes}>
                        <FormControlLabel control={<Checkbox checked={state.upper} onChange={handleCheckBox("upper")} value={"upper"} />} label="Uppercase" />
                        <FormControlLabel control={<Checkbox checked={state.lower} onChange={handleCheckBox("lower")} value={"lower"} />} label="Lowercase" />
                        <FormControlLabel control={<Checkbox checked={state.digits} onChange={handleCheckBox("digits")} value={"digits"} />} label="Digits" />
                        <FormControlLabel control={<Checkbox checked={state.symbols} onChange={handleCheckBox("symbols")} value={"symbols"} />} label="Symbols" />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Generate;