import React, { useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import { callMsGraph } from "../graph";
const ProfileInfo = () => {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState();

  function RequestProfileData() {
    instance
      .acquireTokenSilent({
        ...loginRequest,
        account: accounts[0],
      })
      .then((response) => {
        callMsGraph(response.accessToken).then((response) => {
          console.log(response);
          setGraphData(response);
        });
      });
  }
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {" "}
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
