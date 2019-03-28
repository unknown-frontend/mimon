import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import reducer from './reducers/app';

import App from './components/App';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducer, applyMiddleware(ReduxThunk));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);