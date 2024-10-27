import React, { useState } from 'react';
import './App.css';
import WeightLiftingTechniques from './WeightLiftingTechniques';
import WhatIsSpotting from './WhatIsSpotting';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

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
          </>
        )}
        {currentPage === 'whatIsSpotting' && (
          <WhatIsSpotting onBack={() => setCurrentPage('home')} />
        )}
        {currentPage === 'techniques' && (
          <WeightLiftingTechniques onBack={() => setCurrentPage('home')} />
        )}
      </header>
    </div>
  );
}

export default App;
