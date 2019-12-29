import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { connect } from 'react-redux';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import { getToken, getKey, fetchUser, fetchFolders, fetchVaults } from './_actions/actions';

const darkTheme = createMuiTheme({
    palette: {
        type: 'light'
    }
})

function App(props) {
    useEffect(() => {
        let token = window.sessionStorage.getItem("auth-token")
        let key = window.sessionStorage.getItem("enc-key")
        if (token) {
            props.getToken(token)
        }
        if (key) {
            props.getKey(key)
        }
    }, [])

    useEffect(() => {
        if (props.token !== "") {
            props.fetchUser(props.token)
            props.fetchFolders(props.token)
            props.fetchVaults(props.token)
        }
    }, [props.token])

    return (
        <div className="App">
            <ThemeProvider theme={darkTheme}>
                <Navbar token={props.token} />
                <Router>
                    <Switch>
                        <Route exact path="/" render={() => <Wrapper token={props.token} />} />
                        <Route exact path="/vault/" component={Wrapper} />
                    </Switch>
                </Router>
            </ThemeProvider>
        </div>
    );
}

const mapStateToProps = state => ({
    encKey: state.key,
    token: state.token,
})

export default connect(mapStateToProps, { getToken, getKey, fetchUser, fetchFolders, fetchVaults })(App);
