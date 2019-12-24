import React from 'react';
import { connect } from 'react-redux';

class Folder extends React.Component {
    render() {
        return(
            <h1>Folder</h1>
        )
    }
}

const mapState = state => ({
    folders: state.folders,
})

export default connect(mapState, {})(Folder);