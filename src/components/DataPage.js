
import React, { useEffect, useState } from 'react';

const DataPage = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
            <h1>Lista Prodotti</h1>
            {/* <h2>{data}</h2> */}
            <pre>{JSON.stringify(data, null, 2) }</pre>
        </div>
    );
};

export default DataPage;