import { useFetch } from '../hooks/useFetch';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import ElementCatalog from '../components/ElementCatalog';

const Catalog = () => {
  // const [data, setData] =  useState([]);
  // const [loading, setLoading] = useState(true);
  // const [searchText, setSearchText] = ('');

  // const fetchMovies = (url: string, options: RequestInit) => {
  //     setLoading(true);
  //     fetch(url, options)
  //     .then(res => res.json())
  //     .then(data  => setData(data.results))
  //     .finally(() => setLoading(false))
  // }

  // useEffect(() => {
  //     fetchMovies(URL_INIT, OPTIONS)
  // }, [])

  // useEffect(() => {
  //     console.log(data)
  // }, [data])

  const { data, message } = useFetch('search/movie?query=superman');

  return (
    <>
      <Header brand='Muvie Box' />
      <SearchBar  />
      <main className='Main'>
        {/* {loading && <p>'Loading...'</p>} */}
        {data.length > 0 ? (
          data.map((movie) => <ElementCatalog data={movie} key={movie.id} {...movie} />)
        ) : (
          <p>{message}</p>
        )}
      </main>
    </>
  );
};

export default Catalog;

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
