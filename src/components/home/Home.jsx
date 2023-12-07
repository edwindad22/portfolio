import Experience from '../experience/Experience';

import Portfolio from '../portfolio/Portfolio';

import Contact from '../contact/Contact';
import Footer from '../footer/Footer';

import './home.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='homeContainer'>
        <div className='homeWrapper'>
          <div className='homeHeader'>
            <h3 className='hello'> Hello there, I'm </h3>

            <h1 className='name'>Abu Paul Temidayo</h1>
            <h3 className='title'>Fullstack Software Engineer</h3>
            <p>
              <div>
                The application of codes, manufacture of complex designs,
                calculated manipulation of resources and data in a digital
                arena, I'm a Full Stack Software Engineer who brings your
                imagination to practicality with finesse.
              </div>
            </p>
            <div className='homeBtns'>
              <a href='#portfolio'>
                <button className='homeBtn1'>Explore My Projects</button>
              </a>
              <a href='#contact'>
                <button className='homeBtn2'>Start A Project</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Experience />
      <div className='homePortfolio'>
        <Portfolio />
      </div>
      <Contact />
      {/* <SrollToTop /> */}
      <Footer />
    </div>
  );
};

export default Home;
