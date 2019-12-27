import React from 'react';
import { connect } from 'react-redux';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Container as ContainerMUI } from '@material-ui/core'
import Folder from './Folder'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Container(props) {
    const folders = props.folders.map(folder => {
        return (
            <div className="folder" style={{ margin: 5 }}>
                <ContainerMUI maxWidth={"lg"}>
                    <ExpansionPanel defaultExpanded style={{ backgroundColor: "whitesmoke" }}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <p>{folder.name}</p>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Folder folder={folder} />
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </ContainerMUI>
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