import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./app/App";
import * as serviceWorker from "./serviceWorker";

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
};

render();

// Here we set up hot module replacement (HMR) for the app so that
// whenever we change the component tree, Create-React-App will
// rebuild the app and devs will see changes without having to
// refresh the page
if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./app/App", render);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
