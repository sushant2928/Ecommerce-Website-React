import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Auth0Provider } from "@auth0/auth0-react";

import { store } from "./Redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
let persistor = persistStore(store);
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}
        useRefreshTokens={true}
        cacheLocation="memory"
      >
        <App />
      </Auth0Provider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
