import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore} from "redux"
import { Provider } from "react-redux"
import todoReducer from "./reducers"

const store = createStore(
  todoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Action を Dispatch してReducerにわたすとStateが変わる。
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);