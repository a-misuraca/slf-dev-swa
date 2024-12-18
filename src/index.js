import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { PublicClientApplication, EventType } from "@azure/msal-browser";
import { msalConfig } from "./authConfig";

const msalInstance = new PublicClientApplication(msalConfig);
const activeAccount = msalInstance.getActiveAccount();
if (activeAccount) {
  console.log("Account attivo trovato:", activeAccount);
} else {
  console.log("Nessun account attivo trovato.");
}
// Listen for sign-in event and set active account
msalInstance.addEventCallback((event) => {
  if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
    const account = event.payload.account;
    msalInstance.setActiveAccount(account);
    console.log(msalInstance.getActiveAccount());
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App instance={msalInstance} />
  </React.StrictMode>,
  document.getElementById("root")
);
