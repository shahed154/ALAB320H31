import React from 'react';
import Score from './Score';


function Learner({ name, bio, scores }) {
  return (
    <div className="Learner">
      <h2>{name}</h2>
      <p>{bio}</p>
      <div className="scores-container">
        <h3>Test Scores</h3>
        {scores.map((score, idx) => (
          <Score 
            key={idx}
            date={score.date}
            score={score.score}
          />
        ))}
      </div>
    </div>
  );
}

export default Learner;