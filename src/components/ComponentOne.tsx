
import React from 'react';
import useStore from '../hooks/useStore';

interface ComponentOneProps {
  title?: string;
}

const ComponentOne: React.FC<ComponentOneProps> = ({ title = 'Default Title' }) => {
  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);
  const decrement = useStore((state) => state.decrement);
  const reset = useStore(state => state.reset);

  const handleIncrement = () => {
    increment();
  };
  return (
    <div className="component-one">
      <h2>{title}</h2>
      <p>Count: {count}</p>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default ComponentOne;
