import React from "react";
import { observer } from "mobx-react-lite";
import counterStore from "../../store/counter";

import styled from "styled-components";

const Button = styled.button<{ $primary?: boolean }>`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.$primary ? "#BF4F74" : "white")};
  color: ${(props) => (props.$primary ? "white" : "#BF4F74")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`;

const Counter: React.FC = observer(() => {
  const { count, increment, decrement } = counterStore;

  return (
    <>
      <div role="counter">{count}</div>
      <Button $primary onClick={() => increment()}>
        +
      </Button>
      <Button $primary onClick={() => decrement()}>
        -
      </Button>
    </>
  );
});

export default Counter;
