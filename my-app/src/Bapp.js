import React from 'react';

function B(props) {
  const handleClick = () => {
    props.setCendol(props.cendol + 10);
  };

  return (
    <div>
      <p>Value of cendol in component B: {props.cendol}</p>
      <button onClick={handleClick}>Increment cendol by 10</button>
    </div>
  );
}

export default B;
