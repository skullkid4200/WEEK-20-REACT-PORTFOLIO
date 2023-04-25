import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/about' activestyle = "true">
            About Me
          </NavLink>
          <NavLink to='/portfolio' activestyle  = "true">
            Portfolio
          </NavLink>
          <NavLink to='/contact' activestyle  = "true">
            Contact Me 
          </NavLink>
          <NavLink to='/resume' activestyle  = "true">
            My Resume
          </NavLink>
        </NavMenu>
        <p activestyle = 'true'>
          Jack Einhorn
          </p>
      </Nav>
    </>
  );
};
  
export default Navbar;