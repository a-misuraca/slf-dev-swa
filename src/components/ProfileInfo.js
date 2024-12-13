import React, { useState } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import { callMsGraph } from "../graph";
const ProfileInfo = () => {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState();

  function RequestProfileData() {
    instance.setActiveAccount(accounts);
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
