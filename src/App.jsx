import React from 'react';
import HomePage from './Home/HomePage.jsx';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Backgrounds animés globaux */}
      <div className="parallax-layer"></div>
      <div className="parallax-layer"></div>
      <div className="morphing-shapes">
        <div className="morphing-shape"></div>
        <div className="morphing-shape"></div>
        <div className="morphing-shape"></div>
      </div>
      <div className="energy-pulse"></div>
      <div className="light-trails">
        <div className="light-trail"></div>
        <div className="light-trail"></div>
        <div className="light-trail"></div>
        <div className="light-trail"></div>
        <div className="light-trail"></div>
      </div>
      {/* Contenu principal */}
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
