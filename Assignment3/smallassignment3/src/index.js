import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider, connect } from 'react-redux';
import { getAllBosses } from './actions/bossAction';
import reducers from './reducers';

getAllBosses();
const AppWithRedux = connect(null, { getAllBosses })(App);

ReactDOM.render(
    <Provider store={ createStore(reducers, applyMiddleware(thunk)) }>
        <Router>
            <AppWithRedux />
        </Router>
    </Provider>, document.getElementById('app')
);