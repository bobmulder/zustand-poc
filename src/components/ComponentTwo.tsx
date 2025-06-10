
import React, { useState } from 'react';

interface ComponentOneProps {
  title?: string;
}

const ComponentOne: React.FC<ComponentOneProps> = ({ title = 'Default Title' }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
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
