import React, { useState } from 'react';

function ControlledInput() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h2>Controlled Input Example</h2>
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleChange}
        placeholder="Type here..."
      />
      <p>You typed: {inputValue}</p>
    </div>
  );
}
export default ControlledInput;