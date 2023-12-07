import './footer.css';
import LOGO from '../../assets/td-2.png';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>
        <img src={LOGO} alt='logo' />
      </a>

      <div className='footer__copyright'>
        <small>&copy;2023 Abu Paul TD. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
