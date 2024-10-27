import React from 'react';

function WhatIsSpotting({ onBack }) {
  return (
    <div className="content">
      <button onClick={onBack} className="back-button">Back to Home</button>
      <h2>What is Spotting?</h2>
      <p>Spotting refers to the practice of having a partner assist a lifter during weight training exercises, particularly when lifting heavy weights. The primary role of a spotter is to prevent injuries by providing support if the lifter struggles or fails to complete a lift. Spotting not only enhances safety but can also improve performance by giving the lifter confidence to push their limits.</p>
      
      <h2>When is Spotting Needed?</h2>
      <ul className="main-points">
        <li>
          <strong>Heavy Lifts</strong> Spotting is essential during heavy lifts, such as bench presses, squats, and deadlifts, where the risk of failing a rep increases significantly. A spotter can help control the bar and prevent it from falling on the lifter.
        </li>
        <li>
          <strong>New Exercises</strong> When trying out new exercises or techniques, having a spotter can provide additional security as the lifter adjusts to unfamiliar movements.
        </li>
        <li>
          <strong>Maxing Out</strong> If a lifter is attempting to reach a personal record (PR) or max out their lifts, having someone there to assist can be crucial for both safety and motivation.
        </li>
        <li>
          <strong>Training to Failure</strong> When lifters train to failure (pushing until they cannot complete another rep), a spotter can help turn a failed lift into a forced rep, allowing the lifter to complete the movement with minimal assistance. This approach helps maximize training effectiveness while minimizing systemic stress from failing lifts.
        </li>
        <li>
          <strong>Complex Movements</strong> Exercises that involve complex movements or require balance, such as overhead lifts or squats, benefit from spotting as it allows the lifter to focus on form without worrying about falling or dropping weights.
        </li>
      </ul>
    </div>
  );
}

export default WhatIsSpotting;
