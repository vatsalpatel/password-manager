import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Wrapper from './components/Wrapper';
import './App.css';
import { createMuiTheme, ThemeProvider, useTheme } from '@material-ui/core/styles'

const darkTheme = createMuiTheme({
    palette: {
        type: 'light'
    }
})

function App(props) {
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

export default App;
