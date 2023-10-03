import { Link } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/logo.png'
import '../styled-components/Header.css'

const Header = ({ brand }: { brand: string }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <>
      <header className='header'>
        <div className='header-container'>
          <img src={logo} />
          <p className='header-brand'>{brand}</p>
        </div>
        <button className='Menu__Bar-button' onClick={() => {setIsNavExpanded(!isNavExpanded);}}>
          <img className='Menu__Bar' src='src/assets/menu.svg' />
        </button>
        <nav className='Menu'>
              <ul className={isNavExpanded ? 'Menu__Items Menu--expanded' : 'Menu__Items'}>
                  <li className='Menu__Inside'><Link to={'/home'} id="home">Home</Link></li>
                  <li className='Menu__Inside'><Link to={'/new'} id="new">New</Link></li>
                  <li className='Menu__Inside'><Link to={'/category'} id="category">Category</Link></li>
                  <li className='Menu__Inside'><Link to={'/help'} id="help">Help</Link></li>
              </ul>
        </nav>
      </header>
    </>  
  );
};

export default Header;
