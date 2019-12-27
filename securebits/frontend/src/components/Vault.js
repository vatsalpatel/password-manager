import React from 'react';
import { Typography } from '@material-ui/core';

function Vault(props) {
    return (
        <>
            <Typography variant="h6">
                {props.vault.name}
            </Typography>
        </>
    )
}

export default Vault;