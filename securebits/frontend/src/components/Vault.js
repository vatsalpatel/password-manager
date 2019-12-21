import React from 'react';
import { connect } from 'react-redux';

class Vault extends React.Component {
    render() {
        return (
            <h1>Vault</h1>
        )
    }
}

const mapState = state => ({
    folders: state.folders,
})

export default connect(mapState, {})(Vault);