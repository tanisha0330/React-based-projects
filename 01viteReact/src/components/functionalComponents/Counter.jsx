import React, { useState } from 'react';
import './Counter.css';
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="counter-container">
      <p className="counter-text">Count: {count}</p>
      <button className="counter-button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
export default Counter;