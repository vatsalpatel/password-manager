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
    vaultitems: state.vaultitems,
})

export default connect(mapState, {})(Folder);