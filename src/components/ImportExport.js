import React, { useEffect } from 'react';
import { Container, Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { importFolders } from '../_actions/actions';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "row",
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

    const upload = (e) => {
        let f = new FileReader()
        f.readAsText(e.target.files[0])
        f.onloadend = () => {
            let content = f.result
            let s = JSON.parse(content)
            props.importFolders(s.folders, s.vaults)
        }
    }

    useEffect(() => {
        if(props.status.code === 201) {
            history.push('/vault')
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.status])

    return (
        <>
            {/* <Button onClick={download}>Click</Button> */}
            <Container maxWidth="md" className={classes.container}>
                <Grid container justify="center">
                    <Button
                        variant="contained"
                        component="label"
                    >
                        Import
                    <input
                            onChange={upload}
                            type="file"
                            style={{ display: "none" }}
                        />
                    </Button>
                </Grid>
                <Grid container justify="center">
                    <Button onClick={download} variant="contained">Export</Button>
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