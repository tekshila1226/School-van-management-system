import Footer from '../components/Footer';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import React from 'react';

const HomePage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ flex: 1 }}>
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
