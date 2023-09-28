import { useState, useEffect } from 'react'

export const useFetch =  (URL: string, options: RequestInit) => {
    const [data, setData] =  useState([]);

    useEffect(() => {
        fetch(URL, options)
        .then(res => res.json())
        .then(data  => setData(data))

        return {data}
    }, []);
}


//:{[key: String]: any}