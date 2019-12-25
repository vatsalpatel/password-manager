import React from 'react';
import { connect } from 'react-redux';
import Folder from './Folder'

function Container(props) {
    const folders = props.folders.map(folder => {
        return <Folder folder={folder} />
    })
    console.log(props)
    return (
        <div className="ctn">
            {folders}
        </div>
    )
}

const mapState = state => ({
    folders: state.folders,
})

export default connect(mapState, {})(Container);