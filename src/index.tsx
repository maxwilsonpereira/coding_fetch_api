import React from "react";
import ReactDOM from "react-dom";
import "./global.css";
import App from "./App";
// Redux:
import reportWebVitals from "./reportWebVitals";
import { createStore, combineReducers, compose } from "redux";
import { Provider } from "react-redux";
import globalReducer from "./store/reducers/global";
import subscribersReducer from "./store/reducers/subscribers";

const rootReducer = combineReducers({
  global: globalReducer,
  subscribers: subscribersReducer,
});

// For Google Chrome Extension:
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
