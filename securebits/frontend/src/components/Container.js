import React from 'react';
import { connect } from 'react-redux';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core'
import Folder from './Folder'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Container(props) {
    const folders = props.folders.map(folder => {
        return (
            <div className="folder" style={{margin: 5}}>
                <ExpansionPanel defaultExpanded style={{backgroundColor: "#36393e", color:"#fff"}}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon style={{color:"white"}} />}>
                        <p>{folder.name}</p>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Folder folder={folder} />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        )
    })
    console.log(props)
    return (
        <>
            {folders}
        </>
    )
}

const mapState = state => ({
    folders: state.folders,
})

export default connect(mapState, {})(Container);