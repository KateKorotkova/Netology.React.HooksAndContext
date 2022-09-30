import {useState, useEffect} from 'react';


export default function useJsonFetch(url, opts) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        setLoading(true);

        fetch(url)
        .then((response) => {
            if(response.status != 200) {
                setError("ошибка ответа");
                return;
            }
            return response.json();
        })
        .catch(err => {
            setError("ошибка парсинга");
        })
        .then((data) => {
            setData(data);
        })
        .finally(() => {
            setLoading(false);
        })
    }, []);
    

    return [{data, loading, error}];
}
