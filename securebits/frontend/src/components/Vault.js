import React from 'react';
import { Typography } from '@material-ui/core';

function Vault(props) {
    console.log(props)
    return (
        <>
            <Typography gutterBottom variant="h6">
                {props.name}
            </Typography>
        </>
    )
}

export default Vault;