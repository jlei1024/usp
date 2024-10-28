import React from 'react';

function WeightLiftingTechniques({ onBack }) {
  return (
    <div className="content">
      <button onClick={onBack} className="back-button">Back to Home</button>
      <h2>Weight Lifting Spotting Techniques</h2>
      <p>To effectively spot weight lifting in the gym, whether it's for bench presses, squats, or deadlifts, here are some key techniques and considerations.</p>
      
      <h2>General Spotting Techniques</h2>
      <ul className="main-points">
        <li>
          <strong>Communication</strong>
          <p>Always discuss with the lifter how many reps they plan to do and when they might need assistance. This helps both the spotter and the lifter stay aligned during the exercise.</p>
        </li>
        <li>
          <strong>Positioning</strong>
          <ul className="sub-points">
            <li>For bench presses, stand at the head of the bench, ensuring you can assist without obstructing the lifter's movement. Use a double overhand grip for stability when handing off the bar.</li>
            <li>For squats, position yourself behind the lifter with a staggered stance to maintain balance and readiness to assist. Your hands should be positioned to catch the bar if it begins to fall.</li>
            <li>In deadlifts, stand close behind the lifter. Your body should be positioned to support them if they start to lose balance or control.</li>
          </ul>
        </li>
        <li>
          <strong>Assistance Technique</strong>
          <ul className="sub-points">
            <li>During a bench press, assist by lightly guiding the bar when it reaches a sticking point, using minimal force—ideally just your fingers.</li>
            <li>For squats, follow the lifter down and provide support only if they struggle during their ascent. Avoid touching them unless absolutely necessary.</li>
          </ul>
        </li>
        <li>
          <strong>Safety First</strong>
          <p>If you're uncomfortable spotting a heavy lift or feel it exceeds your strength capacity, it's perfectly acceptable to decline or suggest getting another spotter.</p>
        </li>
      </ul>
    </div>
  );
}

export default WeightLiftingTechniques;
