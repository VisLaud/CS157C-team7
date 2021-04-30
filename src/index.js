import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
<<<<<<< HEAD
=======
import { BrowserRouter as Router } from "react-router-dom";
>>>>>>> fafff138658ca2c61134b97b3d592c1c779461e2

import reducers from "./reducers";

import App from "./App";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDom.render(
  <Provider store={store}>
<<<<<<< HEAD
    <App />
=======
    <Router>
      <App />
    </Router>
>>>>>>> fafff138658ca2c61134b97b3d592c1c779461e2
  </Provider>,
  document.getElementById("root")
);
