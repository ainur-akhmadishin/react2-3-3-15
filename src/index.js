import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './components/app';
import reducer from './redux/reducer';
import { getTickets } from './redux/actions';

const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch(getTickets());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
