import { useEffect, useState } from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SeachBar';
import Movie from '../components/Movie'

export interface Movies {
    id?: number;
    title: string;
    poster_path: string;
    overview: string;
    vote_average: number;
}

// const API_KEY = '2d2fa9874d990d307f10548bbf4393c3';
// const URL_INIT = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US&&page=1`;
const URL_INIT = `https://api.themoviedb.org/3/trending/movie/day?language=en-US`;
const OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDJmYTk4NzRkOTkwZDMwN2YxMDU0OGJiZjQzOTNjMyIsInN1YiI6IjY1MDRmYjhmMzczYWMyMDBhY2Q1YWY3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WTca_n5sjLfwcPckpgAF6mV2cEtNJFQ1vP-6FeyBKwk'
    }
};

const Catalog = () => {
    const [data, setData] =  useState([]);
    const [loading, setLoading] = useState(true);
    const [searchText, setSearchText] = ('');

    const fetchMovies = (url: string, options: RequestInit) => {
        setLoading(true);
        fetch(url, options)
        .then(res => res.json())
        .then(data  => setData(data.results))
        .finally(() => setLoading(false))
    }

    useEffect(() => {
        fetchMovies(URL_INIT, OPTIONS)
    }, [])

    useEffect(() => {
        console.log(data)
    }, [data])
    

    return (
        <>
        <Header brand='Muvie Box'/>
        <SearchBar value={searchText} handleChange={setSearchText}/>
        <main className='Main'>
            {loading && <p>'Loading...'</p>}
            {data?.map((movie) => <Movie key={movie.id} {...movie}/>)}
        </main>
        </>
    )
} 

export default Catalog


//---------------------------------------- Versión antigua-------------------------------------------------//
// const URL_INIT = `https://api.themoviedb.org/3/trending/movie/day?language=en-US`;
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