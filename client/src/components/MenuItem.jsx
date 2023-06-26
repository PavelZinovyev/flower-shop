import React from 'react';

const MenuItem = ({ ...props }) => {
  return (
    <button type="button" className={`item-btn ${props.className}`}>
      {props.children}
    </button>
  );
};

export default MenuItem;
