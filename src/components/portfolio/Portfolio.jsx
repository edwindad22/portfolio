import './portfolio.css';
import IMG1 from '../../assets/afro-social.png';
import IMG2 from '../../assets/youtubeclone.png';
import IMG3 from '../../assets/admin-dashboard.png';
import IMG4 from '../../assets/uber.jpg';
import IMG5 from '../../assets/mulus.png';
import IMG6 from '../../assets/stripe-integration.png';
import IMG7 from '../../assets/pokemon.png';
import IMG8 from '../../assets/sudaperfume.png';
import IMG9 from '../../assets/buy-it.png';
import { useState } from 'react';

const Portfolio = () => {
  const [hover, setHover] = useState('');

  const handelMouseEnter = (projectId) => {
    if (projectId === 1) {
      setHover('1');
      //console.log(hover);
    } else if (projectId === 2) {
      setHover('2');
    } else if (projectId === 3) {
      setHover('3');
    } else if (projectId === 4) {
      setHover('4');
    } else if (projectId === 5) {
      setHover('5');
    } else if (projectId === 6) {
      setHover('6');
    } else if (projectId === 7) {
      setHover('7');
    } else if (projectId === 8) {
      setHover('8');
    } else if (projectId === 9) {
      setHover('9');
    } else {
      setHover('');
    }
  };
  const handelMouseLeave = () => {
    setHover('');
  };

  // /  console.log(hover);
  return (
    <section id='portfolio'>
      <div className='container portfolio__container'>
        <h2 className='portfolio__header'>Projects</h2>
        <div className='container portfolio__wrapper'>
          <article
            onTouchStart={() => handelMouseEnter(1)}
            onTouchEnd={handelMouseLeave}
            onMouseEnter={() => handelMouseEnter(1)}
            onMouseLeave={handelMouseLeave}
            className={
              hover === '1' ? 'portfolio__items_hovered' : 'portfolio__items'
            }
          >
            <div className='portfolio__item-image'>
              <img
                className={
                  hover === '1' ? 'portfolio__image-hover' : 'portfolio__image'
                }
                src={IMG3}
                alt=''
              />
            </div>
            <h3>Admix</h3>
            <div className='portfolio__stacks'>
              <div>ReactJs</div>
              <div>Nodejs</div>
              <div>Mui</div>
              <div>Firebase</div>
              <div>express</div>
            </div>
            {/* <div className='portfolio__item-cta'>
              <a href='https://github.com' target='_blank' className='btn'>
                Check Out
                </a>
              </div> */}
          </article>
          <article
            onTouchStart={() => handelMouseEnter(2)}
            onTouchEnd={handelMouseLeave}
            onMouseEnter={() => handelMouseEnter(2)}
            onMouseLeave={handelMouseLeave}
            className={
              hover === '2' ? 'portfolio__items_hovered' : 'portfolio__items'
            }
          >
            <div className='portfolio__item-image'>
              <img
                className={
                  hover === '2' ? 'portfolio__image-hover' : 'portfolio__image'
                }
                src={IMG2}
                alt=''
              />
            </div>
            <h3 className='portfolio__item-title'> The Stream</h3>
            <div className='portfolio__stacks'>
              <div>ReactJs</div>
              <div>Vanilajs</div>
              <div>Mui</div>
              <div>Api</div>
              <div>Css</div>
            </div>
            {/* <div className='portfolio__item-cta'>
              <a href='https://github.com' target='_blank' className='btn'>
              Check Out
              </a>
            </div> */}
          </article>
          <article
            onTouchStart={() => handelMouseEnter(3)}
            onTouchEnd={handelMouseLeave}
            onMouseEnter={() => handelMouseEnter(3)}
            onMouseLeave={handelMouseLeave}
            className={
              hover === '3' ? 'portfolio__items_hovered' : 'portfolio__items'
            }
          >
            <div className='portfolio__item-image'>
              <img
                className={
                  hover === '3' ? 'portfolio__image-hover' : 'portfolio__image'
                }
                src={IMG1}
                alt=''
              />
            </div>
            <h3> Afro Social</h3>
            <div className='portfolio__stacks'>
              <div>ReactJs</div>
              <div>Firebase</div>
              <div>Css</div>
              <div>VanilaJs</div>
              <div>Api</div>
            </div>
          </article>
          <article
            onTouchStart={() => handelMouseEnter(4)}
            onTouchEnd={handelMouseLeave}
            onMouseEnter={() => handelMouseEnter(4)}
            onMouseLeave={handelMouseLeave}
            className={
              hover === '4' ? 'portfolio__items_hovered' : 'portfolio__items'
            }
          >
            <div className='portfolio__item-image'>
              <img
                className={
                  hover === '4' ? 'portfolio__image-hover' : 'portfolio__image'
                }
                src={IMG4}
                alt=''
              />
            </div>
            <h3>Ride</h3>
            <div className='portfolio__stacks'>
              <div>ReactNative</div>
              <div>Googlemaps</div>
              <div>Javascript</div>
              <div>Css</div>
              <div>Api</div>
            </div>
          </article>
          <article
            onTouchStart={() => handelMouseEnter(5)}
            onTouchEnd={handelMouseLeave}
            onMouseEnter={() => handelMouseEnter(5)}
            onMouseLeave={handelMouseLeave}
            className={
              hover === '5' ? 'portfolio__items_hovered' : 'portfolio__items'
            }
          >
            <div className='portfolio__item-image'>
              <img
                className={
                  hover === '5' ? 'portfolio__image-hover' : 'portfolio__image'
                }
                src={IMG5}
                alt=''
              />
            </div>
            <h3>Mulus Ethiopian Cusine</h3>
            <div className='portfolio__stacks'>
              <div>Html5</div>
              <div>Css</div>
              <div>Javascript</div>
              <div>Bootstrap</div>
              {/* <div>lorem</div> */}
            </div>
          </article>
          <article
            onTouchStart={() => handelMouseEnter(6)}
            onTouchEnd={handelMouseLeave}
            onMouseEnter={() => handelMouseEnter(6)}
            onMouseLeave={handelMouseLeave}
            className={
              hover === '6' ? 'portfolio__items_hovered' : 'portfolio__items'
            }
          >
            <div className='portfolio__item-image'>
              <img
                className={
                  hover === '6' ? 'portfolio__image-hover' : 'portfolio__image'
                }
                src={IMG6}
                alt=''
              />
            </div>
            <h3>Stripe Payments</h3>
            <div className='portfolio__stacks'>
              <div>Reactjs</div>
              <div>Nodejs</div>
              <div>Bootstap</div>
              <div>Javascript</div>
              <div>Api</div>
            </div>
          </article>
          <article
            onTouchStart={() => handelMouseEnter(7)}
            onTouchEnd={handelMouseLeave}
            onMouseEnter={() => handelMouseEnter(7)}
            onMouseLeave={handelMouseLeave}
            className={
              hover === '7' ? 'portfolio__items_hovered' : 'portfolio__items'
            }
          >
            <div className='portfolio__item-image'>
              <img
                className={
                  hover === '7' ? 'portfolio__image-hover' : 'portfolio__image'
                }
                src={IMG7}
                alt=''
              />
            </div>
            <h3>PokeLove</h3>
            <div className='portfolio__stacks'>
              <div>Nextjs</div>
              <div>Typescript</div>
              <div>Api</div>
              <div>Css</div>
              {/* <div>lorem</div> */}
            </div>
          </article>
          <article
            onTouchStart={() => handelMouseEnter(8)}
            onTouchEnd={handelMouseLeave}
            onMouseEnter={() => handelMouseEnter(8)}
            onMouseLeave={handelMouseLeave}
            className={
              hover === '8' ? 'portfolio__items_hovered' : 'portfolio__items'
            }
          >
            <div className='portfolio__item-image'>
              <img
                className={
                  hover === '8' ? 'portfolio__image-hover' : 'portfolio__image'
                }
                src={IMG8}
                alt=''
              />
            </div>
            <h3>SudaPerfume</h3>
            <div className='portfolio__stacks'>
              <div>Html5</div>
              <div>Css</div>
              <div>Javascript</div>
              <div>Bootstap</div>
            </div>
          </article>
          <article
            onTouchStart={() => handelMouseEnter(9)}
            onTouchEnd={handelMouseLeave}
            onMouseEnter={() => handelMouseEnter(9)}
            onMouseLeave={handelMouseLeave}
            className={
              hover === '9' ? 'portfolio__items_hovered' : 'portfolio__items'
            }
          >
            <div className='portfolio__item-image'>
              <img
                className={
                  hover === '9' ? 'portfolio__image-hover' : 'portfolio__image'
                }
                src={IMG9}
                alt=''
              />
            </div>
            <h3>Afri Store</h3>
            <div className='portfolio__stacks'>
              <div>Reactjs</div>
              <div>Nodejs</div>
              <div>Javascript</div>
              <div>express</div>
              <div>Stripe</div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
