import React from 'react';

function Button({title,clickHandler}) {
  return <button onClick={clickHandler} >{title}</button>;
}

export default Button;