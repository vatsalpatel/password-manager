import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
import Home from './components/Home'
import FolderPage from './components/FolderPage'
import SettingsPage from './components/SettingsPage';
import About from './components/About'
import { getToken, getKey, continueSession } from './_actions/actions';

const darkTheme = createMuiTheme({
    palette: {
        type: 'light'
    },
    typography: {
        fontFamily: 'Barlow, Roboto',
    },
})

const useStyles = makeStyles({
    app: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
    },
    top: {
        flexGrow: 1,
    },
})

function PrivateRoute({ children, ...rest }) {
    let isAuthenticated = Boolean(window.sessionStorage.getItem("auth-token"))
    return (
        <Route {...rest} render={() => isAuthenticated ? children : <Redirect to='/' />} />
    )
}

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
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (props.token !== "") {
            props.continueSession(props.token)
        }
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.token])

    const classes = useStyles()

    return (
        <div className={classes.app}>
            <ThemeProvider theme={darkTheme}>
                <Router>
                    <div className={classes.top}>
                        <Navbar token={props.token} />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <PrivateRoute exact path="/vault/">
                                <Wrapper />
                            </PrivateRoute>
                            <PrivateRoute exact path="/folder/">
                                <FolderPage />
                            </PrivateRoute>
                            <PrivateRoute exact path="/settings/">
                                <SettingsPage />
                            </PrivateRoute>
                            <Route exact path="/about/" component={About} />
                        </Switch>
                    </div>
                    <Footer />
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
