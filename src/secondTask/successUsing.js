import React from 'react';
import useJsonFetch from "./useJsonFetch";


function SuccessUsing() {
    const [{data, loading, error}] = useJsonFetch('http://localhost:7070/data', []);
    
    console.log('Success (data, loading, error):', data, loading, error);

    return (<></>)
}


export {SuccessUsing};