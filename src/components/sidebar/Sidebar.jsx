import './sidebar.css';
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div>
      <div className='sideContainer'>
        <div className='sideWrapper'>
          <div className='sideUp'>
            <div></div>
          </div>

          <div className='sideDown'>
            <div className='sideIcons'>
              <a
                href='mailto:temid22@gmail.com'
                target='_blank'
                rel='noreferrer'
              >
                <AiOutlineMail className='sideIcon' />
              </a>
              <a
                href='https://www.linkedin.com/in/paul-temidayo-303497163/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaLinkedinIn className='sideIcon' />
              </a>
              <a
                href='https://github.com/temid22'
                target='_blank'
                rel='noopener noreferrer'
              >
                <AiFillGithub className='sideIcon' />
              </a>
              <hr />
            </div>
            {/* <div className='empty'></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
