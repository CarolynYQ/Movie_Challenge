import logo from '../assets/logo.png'

const Header = ({ brand }: { brand: string }) => {
  return (
    <div>
      <header className='header'>
        <div className='header-container'>
          <img src={logo} />
          <p className='header-brand'>{brand}</p>
        </div>
      </header>
    </div>
  );
};

export default Header;
