import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './style.css';
import NotFound from './views/not-found'; // Corrected import
import Home from './views/home';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={NotFound} exact path="/not-found" />
        <Route component={NotFound} path="*" /> {/* Catch-all route */}
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));