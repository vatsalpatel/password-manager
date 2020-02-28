import React, { useEffect, useState } from 'react';
import { Container, Grid, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { importFolders } from '../_actions/actions';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "row",
    },
    item: {
        display: "flex",
        flexDirection: "column",
    },
    button: {
        width: "5em",
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
            <Container maxWidth="md" className={classes.container}>
                <Grid container justify="center" className={classes.item}>
                    <Grid item>
                        <Button variant="contained" component="label" className={classes.button}>Import
                            <input onChange={handleFile} type="file" style={{ display: "none" }} />
                        </Button>
                        <Typography variant="button">{file.name}</Typography>
                    </Grid>
                    <Grid item>
                        <Button onClick={upload} variant="contained" className={classes.button} disabled={!Boolean(file)}>Upload</Button>
                    </Grid>
                </Grid>
                <Grid container justify="center">
                    <Grid>
                        <Button onClick={download} variant="contained" className={classes.button}>Export</Button>
                    </Grid>
                    <Grid></Grid>
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

export default connect(mapStateToProps, { importFolders })(ImportExport);