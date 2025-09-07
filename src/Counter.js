import React from 'react';
import './Counter.css';

const Counter = ({ label, value, onIncrement, onDecrement }) => {
  return (
    <div className="counter-container">
      <label>{label}</label>
      <div className="counter-controls">
        <button type="button" onClick={onDecrement} className="counter-button">
          -
        </button>
        <span className="counter-value">{value}</span>
        <button type="button" onClick={onIncrement} className="counter-button">
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;