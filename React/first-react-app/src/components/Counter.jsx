import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter: </h2>
      <p>The counter value is: {count}</p>
      <button onClick={() => setCount((val) => val + 1)} className="btn btn-success">Increase</button>
      <button onClick={() => setCount((val) => val - 1)} className="btn btn-danger">Decrease</button>
      <button onClick={() => setCount(0)} className="btn btn-primary">Reset</button>
    </div>
  );
};

export default Counter;
