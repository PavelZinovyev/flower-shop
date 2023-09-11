import React from 'react';

const MyButton = ({ ...props }) => {
  return <button {...props}>{props.children}</button>;
};

// test

export default MyButton;
