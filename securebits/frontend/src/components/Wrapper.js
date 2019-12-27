import React from 'react';
import { connect } from 'react-redux';
import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Container, Typography } from '@material-ui/core'
import Folder from './Folder'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    folder: {
        margin: 10,
    },
    expand: {
        backgroundColor: "whitesmoke"
    }
})

function Wrapper(props) {
    const classes = useStyles();

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
        <Container maxWidth="lg">
            {folders}
        </Container>
    )
}

const mapState = state => ({
    folders: state.folders,
})

export default connect(mapState, {})(Wrapper);