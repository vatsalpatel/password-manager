import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Container from './components/Container';
import './App.css';

function App(props) {
    return (
        <div className="App">
            <Navbar />
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/vault/" component={Container} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
