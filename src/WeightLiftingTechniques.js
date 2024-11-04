import React from 'react';

function WeightLiftingTechniques({ onBack, onVideoClick }) {
  return (
    <div className="content">
      <button onClick={onBack} className="back-button">Back to Home</button>
      <h2>Weight Lifting Spotting Techniques</h2>
      <p>To effectively spot weight lifting in the gym, whether it's for bench presses, squats, or deadlifts, here are some key techniques and considerations.</p>
      
      <h2>Communication</h2>
      <ul className="main-points">
        <li>
          <p>Always discuss with the lifter how many reps they plan to do and when they might need assistance. This helps both the spotter and the lifter stay aligned during the exercise.</p>
          
          <strong>Communication Checklist: SMART – Specific, measurable, achievable, relevant, and time-bound</strong>
          <ul className="sub-points">
            <li>Overall goal: More limit pushing (i.e., performance-oriented), or safer and more sustainable (i.e., lifestyle- and habit-driven) </li>
            
            <li>How many reps planned </li>
            
            <li>If a "lift off" is needed (e.g., for bench press)</li>
            
            <li>If reaches the “sticking points”, what kind of assistance is needed</li>
            
            <li>If reaches the limit before the target reps, how they would like spotter to help (e.g., put the bar back safely, or finish the target counts with minimal assistance) </li>
            
            <li>If feedback on technique and reminders about correct positioning is needed</li>
            
          </ul>
        </li>
        
        <h2>Positioning</h2>
        <p>Proper positioning allows the spotter to provide effective assistance while minimizing the risk of injury to both the lifter and themselves. <span 
                className="video-link" 
                onClick={onVideoClick}
                style={{
                  color: '#61dafb',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  margin: '0 5px'
                }}
              >
                Go to the Videos page
              </span>  to see illustrations of the following techniques.</p>
        <ul className="sub-points">
          <li>For bench presses, the spotter should stand at the head of the bench with one foot slightly back and angled to the side, the other foot forward, and hands positioned to grab the bar, using a double overhand grip. This provides a stable base to assist if needed, allows quick reaction to help guide the bar, and ensures even assistance.</li>
          <li>For squats, the spotter should stand behind the lifter with feet shoulder-width apart to maintain balance and readiness to assist. Spotter's hands should be positioned to catch the bar if it begins to fall. For heavier weights, side spotters may be added, being ready to hold the bar from the sides.</li>
          <li>For deadlifts, the spotter should stand close behind the lifter but not interfere the process. Here, the spotter is to support the trainer when they lose balance or black out, and ensures there are no obstacles around that could cause injury.</li>
          <li>For dumbbell shoulder/upper chest presses, the spotter stands behind the lifter with hands positioned near the lifter's elbows or wrists, depending on the situation. For beginners, spotting at the wrists can prevents dumbbells from collapsing inwards, guide the lifter through the range of motion more securely, and reduces risk of injury for lifters with less stabilizer strength. For experienced lifters, spotting at the elbows provides support without interfering with the lifter's stability.</li>
        </ul>
      </ul>
    </div>
  );
}

export default WeightLiftingTechniques;
