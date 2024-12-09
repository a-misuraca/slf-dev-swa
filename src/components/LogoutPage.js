import React from 'react';

const LogoutPage = () => {

  const goToLogin  = async () => {
    console.log('vai alla login');  
    window.location.href ="/";
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Sei di nuovo offline</h1>
      <button onClick={()=> goToLogin()}> Vai alla login</button>
    </div>
  );
};
export default LogoutPage;