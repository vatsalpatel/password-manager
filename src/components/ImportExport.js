import React, { useEffect, useState } from 'react';
import { Container, Grid, Button, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { importFolders } from '../_actions/actions';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
    container: {
        marginTop: "5em",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    item: {
        display: "flex",
        flexDirection: "column",
        height: "50vh",
        margin: "0 3em",
    },
    button: {
        width: "8em",
    },
    content: {
        marginTop: "3em",
    },
    paper: {
        height: "50vh",
    }
})

class folder {
    constructor(id, name) {
        this.id = id
        this.name = name
    }
}

class vault {
    constructor(name, username, password, folder) {
        this.name = name
        this.username = username
        this.password = password
        this.folder = folder
    }
}

function ImportExport(props) {
    const classes = useStyles();
    let history = useHistory()
    const [file, setFile] = useState('')

    const download = () => {
        let f = props.folders.map(f => new folder(f.id, f.name))
        let v = props.vaults.map(v => new vault(v.name, v.username, v.password, v.folder))
        let text = JSON.stringify({ folders: f, vaults: v }, null, 2)
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', 'Passwords.json');

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

    const upload = () => {
        let f = new FileReader()
        f.readAsText(file)
        f.onloadend = () => {
            let content = f.result
            let s = JSON.parse(content)
            props.importFolders(s.folders, s.vaults)
        }
    }

    const handleFile = (e) => {
        setFile(e.target.files[0])
    }

    useEffect(() => {
        if (props.status.code === 201) {
            history.push('/vault')
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.status])
    return (
        <>
            <Container maxWidth="lg" className={classes.container}>
                <Grid container align="center" className={classes.item}>
                    <Paper className={classes.paper} elevation={5}>
                        <Grid item className={classes.content}>
                            <Typography>Import using a .JSON File</Typography>
                        </Grid>
                        <Grid item className={classes.content}>
                            <Button variant="contained" component="label" className={classes.button} color="primary">Import
                            <input onChange={handleFile} type="file" style={{ display: "none" }} />
                            </Button>
                            <Typography variant="button">{file.name}</Typography>
                        </Grid>
                        <Grid item className={classes.content}>
                            <Button onClick={upload} variant="contained" className={classes.button} disabled={!Boolean(file)} color="primary">Upload</Button>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid container align="center" className={classes.item}>
                    <Paper className={classes.paper} elevation={5}>
                        <Grid item className={classes.content}>
                            <Typography>Export to a .JSON File</Typography>
                        </Grid>
                        <Grid item className={classes.content}>
                            <Button onClick={download} variant="contained" className={classes.button} color="primary">Export</Button>
                        </Grid>
                    </Paper>
                </Grid>
            </Container>
        </>
            )
        }
        
const mapStateToProps = state => ({
                vaults: state.vaults,
            folders: state.folders,
            status: state.status,
        })
        
export default connect(mapStateToProps, {importFolders})(ImportExport);