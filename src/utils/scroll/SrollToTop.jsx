import './scrollToTop.css';
import React, { useState, useEffect } from 'react';
import { LuArrowUpToLine } from 'react-icons/lu';

const ScrollToTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div>
      {showScrollTopButton && (
        <LuArrowUpToLine
          className='top-btn-position top-btn-style'
          onClick={scrollTop}
        />
      )}
    </div>
  );
};

export default ScrollToTop;
