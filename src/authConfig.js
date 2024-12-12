/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { LogLevel } from "@azure/msal-browser";

export const msalConfig = {
  routes: [
    {
      route: "/*",
      allowedRoles: ["authenticated"],
    },
  ],
  responseOverrides: {
    401: {
      statusCode: 302,
      redirect: "/.auth/login/aad",
    },
  },
  auth: {
    clientId: "a377054a-6449-472a-8972-cf0026b6adcb", // This is the ONLY mandatory field that you need to supply.
    authority: "https://access4guests.ciamlogin.com/", // Replace the placeholder with your tenant subdomain
    redirectUri: "https://calm-beach-00fd54803.4.azurestaticapps.net/data/", // Points to window.location.origin. You must register this URI on Microsoft Entra admin center/App Registration.
    postLogoutRedirectUri:
      "https://calm-beach-00fd54803.4.azurestaticapps.net/data/", // Indicates the page to navigate after logout.
    navigateToLoginRequestUrl: false, // If "true", will navigate back to the original request location before processing the auth code response.
  },
  cache: {
    cacheLocation: "sessionStorage", // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
          default:
            return;
        }
      },
    },
  },
};

export const loginRequest = {
  scopes: ["profile", "openid", "User.read"],
};
export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me", //e.g. https://graph.microsoft.com/v1.0/me
};
