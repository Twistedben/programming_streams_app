import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// applyMiddleware and compose in this case is used for redux devtools chrome extension.
import { createStore, applyMiddleware, compose } from "redux";

import App from "./components/App";
import reducers from "./reducers";

// Sets up the redux devtools chrome extension and adds it to our redux store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
