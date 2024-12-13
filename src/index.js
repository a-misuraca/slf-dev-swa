import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { PublicClientApplication, EventType } from "@azure/msal-browser";
import { msalConfig } from "./authConfig";

const msalInstance = new PublicClientApplication(msalConfig);

// Default to using the first account if no account is active on page load
if (
  !msalInstance.getActiveAccount() &&
  msalInstance.getAllAccounts().length > 0
) {
  msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0]);
}

// Listen for sign-in event and set active account
msalInstance.addEventCallback((event) => {
  if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
    const account = event.payload.account;
    msalInstance.setActiveAccount(account);
  }
});

// Controllo se c'è già un account loggato al caricamento
const activeAccount = msalInstance.getActiveAccount();

if (activeAccount) {
  console.log("Utente loggato:", activeAccount);
} else {
  console.log("Nessun account attivo. Utente non loggato.");
}

ReactDOM.render(
  <React.StrictMode>
    <App instance={msalInstance} />
  </React.StrictMode>,
  document.getElementById("root")
);
