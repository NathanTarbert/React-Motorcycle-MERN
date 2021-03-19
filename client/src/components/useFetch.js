import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => { //moch database request delay set to 1 second
            fetch(url, { signal: abortCont.signal })// will abort the fetch request if a new page is clicked.
                .then(res => {
                    if(!res.ok){
                        throw Error('Error Fetching The Data');
                    }
                    return res.json();
                })
                .then((data) => {
                    console.log(data);
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    if(err.name === 'AbortError'){
                        console.log('fetch aborted');
                    }
                    setIsPending(false);
                    setError(err.message);
                });
        }, 1000);
        return () => abortCont.abort;
    }, [url]);

    return { data, isPending, error };
};

export default useFetch;