import React from 'react';
import { connect } from 'react-redux';
import { AppBar, Toolbar, Typography, Button, Grid } from '@material-ui/core';

class Navbar extends React.Component {
    render() {
        return (
            <>
                <AppBar position="static">
                    <Toolbar>
                        <div className="appbar" style={{ display: "flex", flexGrow: 1 }}>
                            <Typography gutterBottom variant="h6">
                                Secure Bits
                            </Typography>
                            <div className="btns" style={{ display: "flex", flexGrow: 1, justifyContent: "flex-end" }}>
                                <Grid>
                                    <Button variant="outlined" style={{ color: "white", border: "1px white solid", marginRight: 5 }}>Log in</Button>
                                    <Button variant="contained" color="secondary" >Sign up</Button>
                                </Grid>
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
            </>
        )
    }
}

export default Navbar;