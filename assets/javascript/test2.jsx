import React from "react";

const Score = ({ score, increment }) => {
  return (
    <div>
      <p id="score">Score: {score}</p>
      <button onClick={increment}>Incrementer</button>
    </div>
  );
};

export default Score;
