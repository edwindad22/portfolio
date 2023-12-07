import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';
import {
  FaCode,
  FaCss3,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa';
import {
  TbBrandFirebase,
  TbBrandMongodb,
  TbBrandNextjs,
  TbBrandReactNative,
  TbBrandTypescript,
  TbDatabase,
} from 'react-icons/tb';
import { SiRedux, SiTailwindcss } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';

const Experience = () => {
  return (
    <section id='experience'>
      <div className='experience__container'>
        <h2 className='experience__header'>Expertise</h2>

        <div className='container experience__wrapper'>
          <div className='experience__frontend'>
            <h3></h3>
            <div className='experience__content'>
              <article className='experience__details'>
                <FaReact className='experience__details-icon' />
                <div>
                  <h4>ReactJS</h4>
                  <small className='text-light'>97%</small>
                </div>
              </article>
              <article className='experience__details'>
                <TbBrandNextjs className='experience__details-icon' />
                <div>
                  <h4>NextJS</h4>
                  <small className='text-light'>85%</small>
                </div>
              </article>
              <article className='experience__details'>
                <SiRedux className='experience__details-icon' />
                <div>
                  <h4>Redux</h4>
                  <small className='text-light'>95%</small>
                </div>
              </article>
              <article className='experience__details'>
                <TbBrandReactNative className='experience__details-icon' />
                <div>
                  <h4>React Native</h4>
                  <small className='text-light'>85%</small>
                </div>
              </article>
              <article className='experience__details'>
                <IoLogoJavascript className='experience__details-icon' />
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>95%</small>
                </div>
              </article>
              <article className='experience__details'>
                <FaHtml5 className='experience__details-icon' />
                <div>
                  <h4>HTML5</h4>
                  <small className='text-light'>99%</small>
                </div>
              </article>
              <article className='experience__details'>
                <SiTailwindcss className='experience__details-icon' />
                <div>
                  <h4>Tailwind CSS</h4>
                  <small className='text-light'>90%</small>
                </div>
              </article>
              <article className='experience__details'>
                <FaCss3 className='experience__details-icon' />
                <div>
                  <h4>CSS3</h4>
                  <small className='text-light'>99%</small>
                </div>
              </article>
            </div>
          </div>

          {/* <div className='exeprience__middle'>|</div> */}
          <div className='experience__backend'>
            <h3></h3>
            <div className='experience__content'>
              <article className='experience__details'>
                <FaNodeJs className='experience__details-icon' />
                <div>
                  <h4>Node JS</h4>
                  <small className='text-light'>90%</small>
                </div>
              </article>

              <article className='experience__details'>
                <TbBrandMongodb className='experience__details-icon' />
                <div>
                  <h4>MongoDB</h4>
                  <small className='text-light'>90%</small>
                </div>
              </article>

              <article className='experience__details'>
                <FaCode className='experience__details-icon' />
                <div>
                  <h4>Rest Api</h4>
                  <small className='text-light'>95%</small>
                </div>
              </article>

              <article className='experience__details'>
                <FaCode className='experience__details-icon' />
                <div>
                  <h4> Api Integration</h4>
                  <small className='text-light'>90%</small>
                </div>
              </article>
              <article className='experience__details'>
                <TbBrandTypescript className='experience__details-icon' />
                <div>
                  <h4>TypeScript</h4>
                  <small className='text-light'>90%</small>
                </div>
              </article>
              <article className='experience__details'>
                <FaGitAlt className='experience__details-icon' />
                <div>
                  <h4>Git</h4>
                  <small className='text-light'>95%</small>
                </div>
              </article>
              <article className='experience__details'>
                <TbBrandFirebase className='experience__details-icon' />
                <div>
                  <h4>FireBase</h4>
                  <small className='text-light'>85%</small>
                </div>
              </article>
              <article className='experience__details'>
                <TbDatabase className='experience__details-icon' />
                <div>
                  <h4>Databases</h4>
                  <small className='text-light'>88%</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
