import React, { useState } from "react";

const Counter = () => {

  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <div className="btns">
        <button className="btn-counter-p" onClick={plus}>
          Plus+
        </button>
        <button className="btn-counter-p" onClick={minus}>
          Minus-
        </button>
      </div>
    </div>
  );
};

export default Counter;
