import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../styled-components/Header.css'

const Header = ({ brand }: { brand: string }) => {
  return (
    <div>
      <header className='header'>
        <div className='header-container'>
          <img src={logo} />
          <p className='header-brand'>{brand}</p>
        </div>
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
    </div>
    
  );
};

export default Header;
