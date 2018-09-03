import React from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import { Provider, } from 'react-redux';
import Loader from '../Loader';
import Signup from '../Signup/index';
import store from '../../containers/store';
import './index.css';

const home = () => (
  <div className="app">
    <Loader />
    <h1>Welcome to Authors Haven</h1>
  </div>
);
const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/home" component={home} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
