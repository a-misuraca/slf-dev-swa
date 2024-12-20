
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'

const DataPage = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  // const [error, setError] = useState('')
  const [jwt, setJwt] = useState('')

  const location = useLocation()
  const navigate = useNavigate();

  const doLogout  = async () => {
    console.log('logout');  
    localStorage.clear();
    window.location.href ="/";
  }

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    console.log("queryParams", queryParams);
    if(queryParams.has('id_token')) {
      setJwt(queryParams.get('id_token'));
      localStorage.set("jwt", queryParams.get('id_token'));
      console.log("id_token", jwt);
      navigate('/', { replace: true })
      //check if valid
      //
    }
  }, [jwt,location.search,navigate ])

    useEffect(() => {
        const fetchData = async () => {
            setData(true);
            try {

                const myHeaders = new Headers();
                // myHeaders.append("Ocp-Apim-Subscription-Key", "fcac52a4a3a9490a92b3407e0000dddb");
                myHeaders.append("Content-Type", "application/json");

                const raw = JSON.stringify({
                    "transactionId": "6636c093-20a0-4677-ac52-75376b5027d1"
                });

                const requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: raw,
                    redirect: "follow"
                };

                // const response = 
                await fetch("https://dev-api-slf.azure-api.net/heroku/v2/pg/listaProdotti", requestOptions)
                    .then(async (response) => {
                        const result = await response.json();
                        // console.log("result", result);
                        console.log("result1", result.result);
                        console.log("result2", result.result.listaProdotti[0]);
                        setData(result.result.listaProdotti[0]);
                        setLoading(false);
                    })
                    .then((result) => console.log(result))
                    .catch((error) => console.error(error));

                // if (!response.ok) {
                //     throw new Error('Network response was not ok');
                // }
               
                
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>Error: {error.message}</h2>;
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>JWT</h1>
            <pre>{localStorage.getItem('jwt')}</pre>
            <button onClick={()=> doLogout()}> Logout</button>
           <h1>Lista Prodotti</h1>
            {/* <h2>{data}</h2> */}
            <pre>{JSON.stringify(data, null, 2) }</pre>
        </div>
    );
};

export default DataPage;