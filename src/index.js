import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware, compose} from "redux";
import createSagaMiddleware from 'redux-saga'
import { Provider } from "react-redux";
import reducers from "./reducer";
import sagas from "./sagas";
import App from "./components/App";

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, compose(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(sagas)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
