import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider, connect } from 'react-redux';
import { getAllBosses } from './actions/bossAction';
import reducers from './reducers';

const AppWithRedux = connect(null, { getAllBosses })(App);

ReactDOM.render(<Provider store={ createStore(reducers, applyMiddleware(thunk)) }><AppWithRedux /></Provider>, document.getElementById('root'));