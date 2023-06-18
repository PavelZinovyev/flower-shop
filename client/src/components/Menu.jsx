import React from 'react';

const Menu = ({ ...props }) => {
  return <nav className="Menu">{props.children}</nav>;
};

export default Menu;
