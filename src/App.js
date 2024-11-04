import React, { useState } from 'react';
import './App.css';
import WeightLiftingTechniques from './WeightLiftingTechniques';
import WhatIsSpotting from './WhatIsSpotting';
import Videos from './Videos';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleVideoClick = () => {
    window.scrollTo(0, 0);
    setCurrentPage('videos');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Universal Spotters' Program!</h1>
        {currentPage === 'home' && (
          <>
            <button onClick={() => setCurrentPage('whatIsSpotting')} className="info-button">
              Spotting in Weight Lifting: What and When
            </button>
            <button onClick={() => setCurrentPage('techniques')} className="technique-button">
              Weight Lifting Spotting Techniques
            </button>
            <button onClick={() => setCurrentPage('videos')} className="video-button">
              Videos
            </button>
          </>
        )}
        {currentPage === 'whatIsSpotting' && (
          <WhatIsSpotting onBack={() => setCurrentPage('home')} />
        )}
        {currentPage === 'techniques' && (
          <WeightLiftingTechniques 
            onBack={() => setCurrentPage('home')} 
            onVideoClick={handleVideoClick}
          />
        )}
        {currentPage === 'videos' && (
          <Videos onBack={() => setCurrentPage('home')} />
        )}
      </header>
    </div>
  );
}

export default App;
