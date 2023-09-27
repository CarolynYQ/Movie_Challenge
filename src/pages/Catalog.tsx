import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Movie from '../components/Movie'

const Catalog = () => {

    
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDJmYTk4NzRkOTkwZDMwN2YxMDU0OGJiZjQzOTNjMyIsInN1YiI6IjY1MDRmYjhmMzczYWMyMDBhY2Q1YWY3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WTca_n5sjLfwcPckpgAF6mV2cEtNJFQ1vP-6FeyBKwk'
        }
    };
    fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
    .then((res: { json: () => void; }) => res.json())
    .then((data) => console.log(data))
    .catch((err: string) => console.error('error:' + err));

    return (
        <>
        <Header brand='Muvie Box'/>
        <nav className='Menu'>
            <div className='Menu-Form'>
                <i className='Search'></i>
                <input className='Menu-Form__search' id='search' placeholder='Search' typeof='search'></input>
            </div>
            <ul className='Menu__Items'>
                <li className='Menu__Inside'><Link to={'/home'} id="home">Home</Link></li>
                <li className='Menu__Inside'><Link to={'/new'} id="new">New</Link></li>
                <li className='Menu__Inside'><Link to={'/category'} id="category">Category</Link></li>
                <li className='Menu__Inside'><Link to={'/help'} id="help">Help</Link></li>
            </ul>
        </nav>
        <main className='Main'>
            {/* <Movie /> */}
        </main>
        </>
    )
}

export default Catalog