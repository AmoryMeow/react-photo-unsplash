import React from 'react';
import './Input.css';

function Input({placeholder, handleChange, value}) {
  return (
    <input 
      type="text" 
      className="Input"
      placeholder={placeholder}
      onChange={(evt) => handleChange(evt.target.value)}
      value={value}
    />
  )
}

export default Input;