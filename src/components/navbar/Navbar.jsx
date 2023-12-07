import './navbar.css';
import LOGO from '../../assets/td-2.png';

const Navbar = () => {
  return (
    <div>
      <div className='navContainer'>
        <div className='navWrapper'>
          <div className='navLeft'>
            <div className='navLeftLinks'>
              <a href='#portfolio'>PROJECTS</a>
            </div>
          </div>
          <div className='navMiddle'>
            <div className='logo'>
              <img src={LOGO} alt='logo' />
            </div>
          </div>
          <div className='navRight'>
            <div className='navRightLinks'>
              <a href='#portfolio'>PROJECTS</a>
              <a href='#contact'>CONTACT</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
