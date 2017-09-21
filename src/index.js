import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";

import * as firebase from 'firebase';

import reducers from "./reducers";

import App from "./containers/app";

const config = {
  apiKey: "AIzaSyAThcIZYMa0oKpSctVBGFwMDoYYi7_DqmI",
  authDomain: "youtube-abda8.firebaseapp.com",
  databaseURL: "https://youtube-abda8.firebaseio.com",
  projectId: "youtube-abda8",
  storageBucket: "",
  messagingSenderId: "606515820105"
};

firebase.initializeApp(config);

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById("main")
);
