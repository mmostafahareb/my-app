import React, { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import './App.css';

function App() {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  }

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount(count);
      console.error('Counter cannot be less than 1!');
    }
  }

  return (
    <div className="container">
      <h1>React Counter and Icons Demo</h1>
      <div className="counter-container">
        <button className="counter-button" onClick={handleDecrement}>-</button>
        <p className="counter-text">{count}</p>
        <button className="counter-button" onClick={handleIncrement}>+</button>
      </div>
      <div className="heart-container">
        <AiFillHeart className="heart-icon" size={count} color="red" />
        <p className="heart-text">The heart size is {count}px!</p>
      </div>
      {count < 0 && (
        <p className="error-text">Error: Counter cannot be negative!</p>
      )}
    </div>
  );
}

export default App;
