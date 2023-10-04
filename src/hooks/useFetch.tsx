import { useState, useEffect } from 'react';
import { Movie } from '../components/ElementCatalog';

// const API_KEY = '2d2fa9874d990d307f10548bbf4393c3';
// const API_ENDPOINT = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US`
const URL_INIT = `https://api.themoviedb.org/3/`;
const TRENDING_MOVIES = 'trending/movie/day?language=en-US';
const SEARCH = 'search/multi?language=en-US&page=1';
const SEARCH_MOVIE = 'search/movie?query=barbie';
const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDJmYTk4NzRkOTkwZDMwN2YxMDU0OGJiZjQzOTNjMyIsInN1YiI6IjY1MDRmYjhmMzczYWMyMDBhY2Q1YWY3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WTca_n5sjLfwcPckpgAF6mV2cEtNJFQ1vP-6FeyBKwk',
  },
};

export const useFetch = (params: string) => {
  const [data, setData] = useState<Movie[]>([]);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchMovies = (url: string, options: RequestInit) => {
    setLoading(true);
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        if (data.results.length !== 0) {
          setData(data.results);
          setError(false);
        } else {
          setError(true);
          setMessage('There are no movies that matched your query');
        }
        console.log(data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchMovies(`${URL_INIT}${params}`, OPTIONS);
  }, [params]);

  // useEffect(() => {
  //     console.log(data)
  // }, [data])

  return { loading, error, message, data };
};

