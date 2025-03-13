import React, { useMemo, useState } from "react";

const Ref = () => {
  let [count, setCount] = useState(0);

  const nums = useMemo(() => {
    return new Array(30_000_000).fill(0).map((_, i) => {
      return {
        index: i,
        isMagical: i === 20_000_000,
      };
    });
  }, []);
  const [numbers, setNumbers] = useState(nums);

  const magical = useMemo(
    () => numbers.find((item) => item.isMagical === true),
    [numbers]
  );

  function clickHandler() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <button onClick={clickHandler}>The count value is {count}</button>
      <span>Magical number is {magical.index}</span>
    </div>
  );
};

export default Ref;
