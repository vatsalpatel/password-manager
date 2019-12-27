import React from 'react';
import { connect } from 'react-redux';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Container as ContainerMUI } from '@material-ui/core'
import Folder from './Folder'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Container(props) {
    return (
        <>
        </>
    )
}

const mapState = state => ({
    folders: state.folders,
})

export default connect(mapState, {})(Container);