import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { connect } from 'react-redux';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import Home from './components/Home'
import FolderPage from './components/FolderPage'
import SettingsPage from './components/SettingsPage';
import { getToken, getKey, continueSession } from './_actions/actions';

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
            props.continueSession(props.token)
        }
    }, [props.token])

    return (
        <div className="App">
            <ThemeProvider theme={darkTheme}>
                <Router>
                    <Navbar token={props.token} />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/vault/" component={Wrapper} />
                        <Route exact path="/folder" component={FolderPage} />
                        <Route exact path="/settings" component={SettingsPage} />
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

export default connect(mapStateToProps, { getToken, getKey, continueSession })(App);
