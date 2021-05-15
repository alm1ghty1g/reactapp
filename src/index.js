// noprotect
import React from "react";
import ReactDOM from "react-dom";
import "bulma/css/bulma.min.css";
import "./index.css";
import App from "./App";
import Amplify, { Auth } from "aws-amplify";
import configuration from "./configuration";
import * as serviceWorker from "./serviceWorker";
import config from "./aws-exports";

// Amplify.configure(config);

Auth.configuration(config);

// Amplify.configure({
//   Auth: {
//     mandatorySignedIn: true,
//     region: configuration.cognito.REGION,
//     userPoolId: configuration.cognito.USER_POOL_ID,
//     userPoolWebClientId: configuration.cognito.APP_CLIENT_ID,
//   },
// });

Auth.configure({
  Auth: {
    mandatorySignedIn: true,
    region: configuration.cognito.REGION,
    userPoolId: configuration.cognito.USER_POOL_ID,
    userPoolWebClientId: configuration.cognito.APP_CLIENT_ID,
  },
});

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
