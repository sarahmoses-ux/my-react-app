import { useState } from "react";

function Counter() {
  const [count, setCount] =  useState(0);

  // Increment function
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement function
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="Counter">
      <h2>Counter</h2>
      <button className="decrease" onClick={decrement}>-</button>
      <span >{count}</span>
      <button className="increase" onClick={increment} >+</button>
    </div>
  );
}

export default Counter;