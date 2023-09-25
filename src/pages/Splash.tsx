import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../styled-components/splash.css'

const Splash = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/catalog')
  };

  return (
    <>
    <div>
    <img src={logo} className="logo" alt="muvie box logo" />
    </div>
    <h1 className='Splash-title'>Muvie Box</h1>
    <p className='Splash-description'>On this site you will find everything from your favorite movies and series to the genres you might be interested in.</p>
    <button className='button Splash-button' onClick={handleClick}>Explore
    </button>
    </>
  );
}

export default Splash;