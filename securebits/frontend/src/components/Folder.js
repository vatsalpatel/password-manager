import React from 'react';
import { connect } from 'react-redux';
import Vault from './Vault'

function Folder(props) {
    console.log(props.folder.id)
    const folderVaults = props.vaults.filter(vault => { return vault.folder === props.folder.id })
    const vaults = folderVaults.map(vault => {
        return <Vault vault={vault} />
    })
    console.log(props)
    return (
        <div className="folder">
            {vaults}
        </div>
    )
}

const mapState = state => ({
    vaults: state.vaults,
})

export default connect(mapState, {})(Folder);