import { useState, useEffect } from 'react';

const useFetch = (url) => {
    console.log('url from useFeth at top #1', url)
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();
        setTimeout(() => { //moch database request delay set to 1 second
            fetch(url, { signal: abortCont.signal })// will abort the fetch request if a new page is clicked.
                .then(res => {
                    console.log("this is the res from useFetch #2", res);
                    if(!res.ok){
                        throw Error('Error Fetching The Data');
                    }
                    return res.json();
                })
                .then((data) => {
                    console.log('this is coming from data', data);
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