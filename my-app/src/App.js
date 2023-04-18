import React, { useState } from 'react';
import B from './Bapp';

function A() {
  const [cendol, setCendol] = useState(2);

  return (
    <div>
      <B cendol={cendol} setCendol={setCendol} />
      <p>Value of cendol in component A: {cendol}</p>
    </div>
  );
}

export default A;
