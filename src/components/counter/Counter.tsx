import React from "react";
import { observer } from "mobx-react-lite";
import counterStore from "../../store/counter";

const Counter: React.FC = observer(() => {
  const { count, increment, decrement } = counterStore;

  return (
    <>
      <div role="counter">{count}</div>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
    </>
  );
});

export default Counter;
