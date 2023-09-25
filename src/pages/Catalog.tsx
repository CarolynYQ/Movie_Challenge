import Movie from '../components/Movie'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

export const Catalog = () => {
const url = 'https://api.themoviedb.org/3/configuration';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer 2d2fa9874d990d307f10548bbf4393c3'
  }
};

fetch(url, options)
  .then((res: { json: () => void; }) => res.json())
  .then((json) => console.log(json))
  .catch((err: string) => console.error('error:' + err));




    return (
        <>
        <header>
        <img src={logo} />
        <p>Movie Box</p>
        </header>
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
            <Movie />
        </main>
        </>
    )
}

export default Catalog