import React from 'react';
import { connect } from 'react-redux';
import Vault from './Vault'
import { Grid, Card, CardContent, CardActions, IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

function Folder(props) {
    return (
        <>
        </>
    )
}

const mapState = state => ({
    vaults: state.vaults,
})

export default connect(mapState, {})(Folder);