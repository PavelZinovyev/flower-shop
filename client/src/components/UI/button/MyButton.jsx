import React from 'react';

const MyButton = ({ ...props }) => {
  return <button {...props}>{props.children}</button>;
};

export default MyButton;
