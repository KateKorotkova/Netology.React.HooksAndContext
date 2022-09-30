import React from 'react';
import useJsonFetch from "./useJsonFetch";


function LoadingUsing() {
    const [{data, loading, error}] = useJsonFetch('http://localhost:7070/loading', []);
    
    console.log('Loading (data, loading, error):', data, loading, error);

    return (<></>)
}


export {LoadingUsing};