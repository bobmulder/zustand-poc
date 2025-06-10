
import React, { useState } from 'react';
import { useCounter, useText } from '../hooks/useStore';

interface ComponentOneProps {
  title?: string;
}

const ComponentOne: React.FC<ComponentOneProps> = ({ title = 'Default Title' }) => {
  // Use the selector hooks instead of individual selectors
  const { count, increment, decrement, reset } = useCounter();
  const { text, setText, clearText } = useText();
  
  // Local state for input
  const [inputValue, setInputValue] = useState('');
  
  const handleTextSubmit = () => {
    setText(inputValue);
    setInputValue('');
  };

  return (
    <div className="component-one">
      <h2>{title}</h2>
      
      <div className="counter-section">
        <h3>Counter</h3>
        <p>Count: {count}</p>
        <div>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
      
      <div className="text-section">
        <h3>Text</h3>
        <p>Current text: {text || '(empty)'}</p>
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Enter new text"
        />
        <button onClick={handleTextSubmit}>Update Text</button>
        <button onClick={clearText}>Clear Text</button>
      </div>
    </div>
  );
};

export default ComponentOne;
