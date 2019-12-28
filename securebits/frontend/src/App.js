import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { connect } from 'react-redux';
import { getToken, getKey, loginUser } from './_actions/actions';

const darkTheme = createMuiTheme({
    palette: {
        type: 'light'
    }
})

function App(props) {
    useEffect(() => {
        let token = window.sessionStorage.getItem("auth-token")
        let key = window.sessionStorage.getItem("enc-key")
        if(token) {
            props.getToken(token)
        }
        if(key) {
            props.getKey(key)
        }
        // props.loginUser("admin", "qweasdrf")
    }, [])

    return (
        <div className="App">
            <ThemeProvider theme={darkTheme}>
                <Navbar />
                <Router>
                    <Switch>
                        <Route exact path="/" component={Wrapper} />
                        <Route exact path="/vault/" component={Wrapper} />
                    </Switch>
                </Router>
            </ThemeProvider>
        </div>
    );
}

const mapStateToProps = state => ({
    encKey: state.key,
})

export default connect(mapStateToProps, { getToken, getKey, loginUser })(App);
