import React from 'react';

function Videos({ onBack }) {
  return (
    <div className="content">
      <button onClick={onBack} className="back-button">Back to Home</button>
      <h2>Spotting Demonstration Videos</h2>
      
      <div className="video-section">
        <h3>Bench Press Spotting</h3>
        <div className="video-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/QzRwqQU3Wyc?si=ieOq333Llm8TKO-a" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen>
          </iframe>
        </div>

        <h3>Squat Spotting</h3>
        <div className="video-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/BhM-e1d-Sm4?si=a0vYv_Br0rHwnkAm" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen>
          </iframe>
        </div>

        <h3>Deadlift Spotting</h3>
        <div className="video-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/YvRUoe0Bs-Q?si=MX4AxOhNEcY0QKk8" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen>
          </iframe>
        </div>

        <h3>General Spotting Tips</h3>
        <div className="video-container">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/wziFr4_MR_Q?si=Gbn3MhtsbLmpnvzi" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen>
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default Videos;
