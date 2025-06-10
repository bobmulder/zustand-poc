
import React, { useState } from 'react';
import useStore from "../hooks/useStore";

interface ComponentOneProps {
  title?: string;
}

const ComponentOne: React.FC<ComponentOneProps> = ({ title = 'Default Title' }) => {
  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);

  const handleIncrement = () => {
    increment();
  };

  return (
    <div className="component-one">
      <h2>{title}</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default ComponentOne;
