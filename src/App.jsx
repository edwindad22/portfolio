import React from 'react';
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import ScrollToTop from './utils/scroll/SrollToTop';

const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <Home />
      <Sidebar />
      <ScrollToTop />
    </div>
  );
};

export default App;
