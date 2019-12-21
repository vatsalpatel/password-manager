import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Vault from './components/Vault';
import './App.css';

function App(props) {
    return (
        <div className="App">
            <Navbar />
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/vault/" component={Vault} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
