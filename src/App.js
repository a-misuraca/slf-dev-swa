// import logo from './logo.svg';
// import './App.css';

// // https://calm-beach-00fd54803.4.azurestaticapps.net/

// // id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Inp4ZWcyV09OcFRrd041R21lWWN1VGR0QzZKMCJ9.eyJhdWQiOiJhMzc3MDU0YS02NDQ5LTQ3MmEtODk3Mi1jZjAwMjZiNmFkY2IiLCJpc3MiOiJodHRwczovLzZjZWVmOWVmLTAwNzYtNDE3Mi1iZWMxLTAxMTY4NTZkYWU2ZC5jaWFtbG9naW4uY29tLzZjZWVmOWVmLTAwNzYtNDE3Mi1iZWMxLTAxMTY4NTZkYWU2ZC92Mi4wIiwiaWF0IjoxNzMzNzUyMDUxLCJuYmYiOjE3MzM3NTIwNTEsImV4cCI6MTczMzc1NTk1MSwiYWlvIjoiQVdRQW0vOFlBQUFBYTJ2Zkg1ODRCU2g2UWlydGhsd1g3MitEN28ycVdiOWtiZXNxMlBUZDhaY3ZrTE1tZFdQdGtEWmlUY0NlYzhCZUlmUXF1TC9pNk1oSjlXay9UU0ZiOFl1ZmF6ZjdmVkh0YVJFcEYvREcwTHNGVjlYM09CTnMrMTJSejVnZ2NmS3ciLCJub25jZSI6Im5MTUV6TVd2THMiLCJyaCI6IjEuQVpnQTdfbnViSFlBY2tHLXdRRVdoVzJ1YlVvRmQ2TkpaQ3BIaVhMUEFDYTJyY3VZQUtLWUFBLiIsInN1YiI6IktjU2RUdDBGZXFNZjJfM2JXRVdhNFM0LXVja0pwakNxYmR5TzRuT3VZX0UiLCJ0aWQiOiI2Y2VlZjllZi0wMDc2LTQxNzItYmVjMS0wMTE2ODU2ZGFlNmQiLCJ1dGkiOiJIY3BuZ01sdmFVaVA3Q1VGS3BrQkFBIiwidmVyIjoiMi4wIn0.mmwyh6N4lAolkQijzjZR8o2sp7R4X4ZHyhLK-gkDbnlWP2H4kZXWUQ7PyZEMNY8N8QB2mM8GJs2cEOdCZ11hiIz9220J5MsQ8sZoJF-zGTc-bkhAtHm4-mcpsD3t01hLMBoIfhtlSB0e0tA4AmnbUzolWU8oK-GwRpgDW3Qc8LdKeTzFpx4-TZx2-r8jGOx8eNdFApMpTQ-7Bbn4ZmzqQA02oy3nNP8lhOC-5PA1Mf9qdT8aH22LMO3tKT42P643l9YQwbMieRz3rM0hJJjXVwUCGHgFRiVV7-dw0UywnXPg5xJp0DeaXsgwD7kRns4KKJr3Sl2bwNybVk5svUqvQw&session_state=714f5f4e-a4b7-4f18-8394-ebe49d430927

// // https://calm-beach-00fd54803.4.azurestaticapps.net/#id_token=
// // eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Inp4ZWcyV09OcFRrd041R21lWWN1VGR0QzZKMCJ9.eyJhdWQiOiJhMzc3MDU0YS02NDQ5LTQ3MmEtODk3Mi1jZjAwMjZiNmFkY2IiLCJpc3MiOiJodHRwczovLzZjZWVmOWVmLTAwNzYtNDE3Mi1iZWMxLTAxMTY4NTZkYWU2ZC5jaWFtbG9naW4uY29tLzZjZWVmOWVmLTAwNzYtNDE3Mi1iZWMxLTAxMTY4NTZkYWU2ZC92Mi4wIiwiaWF0IjoxNzMzNzUyMDUxLCJuYmYiOjE3MzM3NTIwNTEsImV4cCI6MTczMzc1NTk1MSwiYWlvIjoiQVdRQW0vOFlBQUFBYTJ2Zkg1ODRCU2g2UWlydGhsd1g3MitEN28ycVdiOWtiZXNxMlBUZDhaY3ZrTE1tZFdQdGtEWmlUY0NlYzhCZUlmUXF1TC9pNk1oSjlXay9UU0ZiOFl1ZmF6ZjdmVkh0YVJFcEYvREcwTHNGVjlYM09CTnMrMTJSejVnZ2NmS3ciLCJub25jZSI6Im5MTUV6TVd2THMiLCJyaCI6IjEuQVpnQTdfbnViSFlBY2tHLXdRRVdoVzJ1YlVvRmQ2TkpaQ3BIaVhMUEFDYTJyY3VZQUtLWUFBLiIsInN1YiI6IktjU2RUdDBGZXFNZjJfM2JXRVdhNFM0LXVja0pwakNxYmR5TzRuT3VZX0UiLCJ0aWQiOiI2Y2VlZjllZi0wMDc2LTQxNzItYmVjMS0wMTE2ODU2ZGFlNmQiLCJ1dGkiOiJIY3BuZ01sdmFVaVA3Q1VGS3BrQkFBIiwidmVyIjoiMi4wIn0.mmwyh6N4lAolkQijzjZR8o2sp7R4X4ZHyhLK-gkDbnlWP2H4kZXWUQ7PyZEMNY8N8QB2mM8GJs2cEOdCZ11hiIz9220J5MsQ8sZoJF-zGTc-bkhAtHm4-mcpsD3t01hLMBoIfhtlSB0e0tA4AmnbUzolWU8oK-GwRpgDW3Qc8LdKeTzFpx4-TZx2-r8jGOx8eNdFApMpTQ-7Bbn4ZmzqQA02oy3nNP8lhOC-5PA1Mf9qdT8aH22LMO3tKT42P643l9YQwbMieRz3rM0hJJjXVwUCGHgFRiVV7-dw0UywnXPg5xJp0DeaXsgwD7kRns4KKJr3Sl2bwNybVk5svUqvQw
// // &session_state=714f5f4e-a4b7-4f18-8394-ebe49d430927

// // https://calm-beach-00fd54803.4.azurestaticapps.net/?code=
// // 1.AZgA7_nubHYAckG-wQEWhW2ubUoFd6NJZCpHiXLPACa2rcuYAKKYAA.AgABBAIAAADW6jl31mB3T7ugrWTT8pFeAwDs_wUA9P9tUYEWlg_MfG6yjBnv5kMvD5ONDIq3hJ1jK0TO5dy0_sNNFKCXuz94Gm5m24Q-0Jyf5O6EcbKfz4JCLCNTLw7MZPbCDVO_rDaVwTOtsX2gdk4c1MupNaMfo_jYbM457jW6fRCkR5avcmkbhIc6cBLAC05jLFj5n1oUlotpop_o1NAzeHeHZW1rjTErI5pd03mM0rqOFd4QRlu9aovCH6Vm4G5lvtd3tshubkUTN3sPG1KbnbCqmcA2jmmNyH8gA_lkCCmBYjNxtt6y8oe1QlLhLZOAt8eD2siRL0s-qnfLdqcINynWyT6BzcvzOeHxmEEajtSzYZ-IyW5rvAwMf7I8r6T53P_v-s7xRGbJXgL1-LDf7_v6HO5MooXURuZQG3jsGU6CpS9o-73LAYcDSN9E6KQRJvb2gBKzo2R00XUfLtR8fGlgzp7Nq9X2a3OjqYifHyMrqutCQuDRjER9HuA1MDDN7zQztHbM4fdtlVsv-MWzNbRQzKGB8ZOwcfReAj2gkeAKXJYwhc9ybxsisYxkjL0Z8GsDVBhM-f0u9BHAHASvT3MQhkCoGHew6vnahQ3AKfo4OB4mZGQcEUNMaUAka8_5AA6GCMV-oJqKGlZTA-hnRjqQAoM-uZPslaJVcOWA9ymilkvXquYYSV_hIZZLQ9_LgYpS9lvNRaMK-tHV_M5wqElAaoGPpMRjVJT6OwK3XX5I22YRpXOYfhbI9fx46n_dcNQ1xQdf45PwOiuiGBchFOS-RYfszhNgZvLgcMfwd9Ae1d5lCkENW1RCydu0wd9JF0-8JAwC7A2TI3Z6Lhzm4FKwgffryz4kpPMtln83QuupCic8FaMc3skO2NkUWRY
// // &session_state=714f5f4e-a4b7-4f18-8394-ebe49d430927

// function App() {

//   //entro in pagina con id_token
//   //salvo id_token
//   //cancello id_token da url
//   //

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Pulsee Demo Login
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//          Login
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";

/* import { PublicClientApplication } from "@azure/msal-browser";
 */ import { MsalProvider } from "@azure/msal-react";
/* import { msalConfig } from "./authConfig";
 */ import ProfileInfo from "./components/ProfileInfo";

const App = ({ instance }) => {
  return (
    <MsalProvider instance={instance}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/data" element={<ProfileInfo />} />
          {/* <Route exact path="/datahk" element={<DataPage />} />
          <Route exact path="/logout" element={<LogoutPage />} /> */}
        </Routes>
      </Router>
    </MsalProvider>
  );
};

export default App;
