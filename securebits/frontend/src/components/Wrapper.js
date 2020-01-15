import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Container, Typography, Button } from '@material-ui/core'
import Folder from './Folder'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import VaultForm from './Forms/VaultForm';

const useStyles = makeStyles({
    buttons: {
        marginTop: "1em",
        marginRight: "5em",
        display: "flex",
        justifyContent: "flex-end",
    },
    folder: {
        margin: 10,
    },
    expand: {
        backgroundColor: "whitesmoke"
    },
})

function Wrapper(props) {
    const classes = useStyles();

    const [dialog, setDialog] = useState(false);
    const openDialog = () => setDialog(true)
    const closeDialog = () => setDialog(false)

    const folders = props.folders.map(folder => {
        return (
            <div className={classes.folder} key={folder.id}>
                <ExpansionPanel defaultExpanded className={classes.expand}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h6">
                            {folder.name}
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Folder {...folder} />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        )
    })
    return (
        <div className="wrapper">
            {props.folders.length
                ? <div className={classes.buttons}>
                    <Button onClick={openDialog} variant="contained" size="large" color="primary" >Add Vault</Button>
                    <VaultForm open={dialog} onClose={closeDialog} />
                </div>
                : <Typography align="center">Please create some folders.</Typography>
            }
            <Container maxWidth="lg">
                {folders}
            </Container>
        </div>
    )
}

const mapState = state => ({
    folders: state.folders,
    token: state.token,
})

export default connect(mapState, {})(Wrapper);