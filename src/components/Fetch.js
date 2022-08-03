import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url, {
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
            .then(res => {
                if(!res.ok) {
                    throw Error('Could not fetch the data')
                }
                return res.json();
            })
            .then(data => {
                setData(data)
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            })
    }, [url]);

    return {data, isPending, error}
});
}
 
export default useFetch;