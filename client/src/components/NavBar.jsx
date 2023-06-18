import React from 'react';

const NavBar = ({ ...props }) => {
  return <header className="header">{props.children}</header>;
};

export default NavBar;
