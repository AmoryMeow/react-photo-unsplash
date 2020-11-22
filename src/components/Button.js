import React from 'react';
import './Button.css';

function Button({title, ...restProps}) {
  return (
    <button className="Button" {...restProps}>
      {title}
    </button>
  )
}

export default Button;