import React, { useState } from 'react';

const Counter = (props) => {
  return (
    <div>
      <h1 className="counterNum">{props.count > 1 ? `${props.count} likes` : props.count}</h1>
    </div>
  );
};

export default Counter;
