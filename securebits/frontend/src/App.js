import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Vault from './components/Vault';
import './App.css';

function App(props) {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <>
                            <Navbar />
                            <Home />
                        </>
                    </Route>
                    <Route exact path="/vault/">
                        <>
                            <Navbar />
                            <Vault />
                        </>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
