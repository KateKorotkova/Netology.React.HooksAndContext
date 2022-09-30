import React from 'react';
import useJsonFetch from "./useJsonFetch";


function ErrorUsing() {
    const [{data, loading, error}] = useJsonFetch('http://localhost:7070/error', []);
    
    console.log('Error (data, loading, error):', data, loading, error);

    return (<></>)
}


export {ErrorUsing};