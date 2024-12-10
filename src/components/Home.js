import React from 'react'

const Home = () => {

  const client_id = "a377054a-6449-472a-8972-cf0026b6adcb&nonce=1T2lCMSZKz";
  const redirect_uri = "https://calm-beach-00fd54803.4.azurestaticapps.net/data";
  const scope = "openid";
  const response_type = "id_token";
  const prompt = "login";
  // const code_challenge_method = "S256";
  // const code_challenge ="s22lcbJQQV-NZDMHSDRT7i0_4UJXR81BmqNW0TfHoM8";

  // https://access4guests.ciamlogin.com/access4guests.onmicrosoft.com/oauth2/v2.0/authorize?
  client_id=a377054a-6449-472a-8972-cf0026b6adcb&nonce=1T2lCMSZKz&redirect_uri=https://calm-beach-00fd54803.4.azurestaticapps.net/data/&scope=openid&response_type=id_token&prompt=login
  const doLogin  = async () => {
    console.log('doLogin');  
    window.location.href =`https://access4guests.ciamlogin.com/access4guests.onmicrosoft.com/oauth2/v2.0/authorize?
    client_id=${client_id}&
    redirect_uri=${redirect_uri}&
    scope=${scope}&
    response_type=${response_type}&
    prompt=${prompt}`;
    // &code_challenge_method=${code_challenge_method}&
    // code_challenge=${code_challenge}`;
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Login Example V1</h1>
      <button onClick={()=> doLogin()}> Login</button>
    </div>
  );
};
export default Home;