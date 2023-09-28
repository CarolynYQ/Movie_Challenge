import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Movie from '../components/Movie'

export interface Movies {
    id?: number;
    title: string;
    poster_path: string;
    overview: string;
    vote_average: number;
}

const API_KEY = '2d2fa9874d990d307f10548bbf4393c3';
const URL_INIT = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US&&page=1`;

const Catalog = () => {
    const [data, setData] =  useState([]);

    const fetchMovies = (url: string) => {
        fetch(url)
        .then(res => res.json())
        .then(data  => setData(data.results))
    }

    useEffect(() => {
        fetchMovies(URL_INIT)
    }, [])

    useEffect(() => {
        console.log(data)
    }, [data])
    

    return (
        <>
        <Header brand='Muvie Box'/>
        <main className='Main'>
            {data?.map((movie) => <Movie key={movie.id} {...movie}/>)}
        </main>
        </>
    )
} 

export default Catalog


//---------------------------------------- Versión antigua-------------------------------------------------//
// const URL_INIT = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US&&page=100`;
// const OPTIONS = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer 2d2fa9874d990d307f10548bbf4393c3'
//     }
// };

// const Catalog = () => {
//     const [data, setData] =  useState([]);

//     const fetchMovies = (url: string, options: RequestInit) => {
//         fetch(url, options)
//         .then(res => res.json())
//         .then(data  => setData(data.results))
//     }

//     useEffect(() => {
//         fetchMovies(URL_INIT, OPTIONS)
//     }, [])

//     useEffect(() => {
//         console.log(data)
//     }, [data]);
// } 