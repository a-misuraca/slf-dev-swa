import React, { useState } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import { callMsGraph } from "../graph";
import { useNavigate } from "react-router-dom";

const ProfileInfo = () => {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState();
  const navigate = useNavigate();

  function RequestProfileData() {
    const activeAccount = instance.getActiveAccount();

    if (!activeAccount) {
      console.error(
        "Nessun account attivo trovato. L'utente deve autenticarsi."
      );
      navigate("/");
      return;
    }
    instance
      .acquireTokenSilent({
        ...loginRequest,
        account: accounts[0],
      })
      .then((response) => {
        callMsGraph(response.accessToken).then((response) => {
          console.log(response);
          console.log(accounts);
          setGraphData(response);
        });
      });
  }

  async function callBackend (accessToken) {

    fetch('https://dev-api-slf.azure-api.net/heroku/v2/getDocument/AXPODT2022-630736552-6936587', {
      method: 'GET',
      headers: {
          "Authorization": 'Bearer ' + accessToken,
          "Ocp-Apim-Subscription-Key": "fcac52a4a3a9490a92b3407e0000dddb"
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('data', data)
        // document.getElementById('FieldTableBeResponse').innerText = JSON.stringify(data, null, 2);
    })
    .catch(error => {
      console.log('error', error)
        // document.getElementById('FieldTableBeResponse').innerText = error;
    });
  }

 
  function RequestBackendData() {
    const activeAccount = instance.getActiveAccount();
    const loginRequestBackend = { scopes: ["api://a377054a-6449-472a-8972-cf0026b6adcb/AuthenticatedUser"], account: accounts[0]}
    if (!activeAccount) {
      console.error(
        "Nessun account attivo trovato. L'utente deve autenticarsi."
      );
      navigate("/");
      return;
    }
    instance
      .acquireTokenSilent(loginRequestBackend)
      .then((response) => {
        callBackend(response.accessToken).then((response) => {
          console.log("Resp BE", response);
        });
      });
  }
  function handleLogout() {
    instance
      .logoutRedirect()
      .then(() => {
        console.log("User logged out");
      })
      .catch((error) => {
        console.error("Logout error: ", error);
      });
  }
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button
        variant="secondary"
        onClick={handleLogout}
        style={{ marginLeft: "10px" }}
      >
        Logout
      </button>
      {accounts && (
        <button variant="secondary" onClick={RequestProfileData}>
          Request Profile Information
        </button>
      )}
       {accounts && (
        <button variant="secondary" onClick={RequestBackendData}>
          Request RequestBackendData
        </button>
      )}
      {graphData && (
        <div>
          <h1>
            {graphData.givenName} {graphData.surname}
          </h1>
          <p>{graphData.displayName}</p>
          <p>{graphData.mail}</p>
          <p>{graphData.userPrincipalName}</p>
        </div>
      )}
    </div>
  );
};

export default ProfileInfo;
