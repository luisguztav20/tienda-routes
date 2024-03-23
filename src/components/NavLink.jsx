import React from "react";
import { NavLink as NL } from "react-router-dom";



//componente para encapsular todo el Navlink
// los 3 puntos son los sprentl

const NavLink = ({to, children, ...props}) => {
    return(
      <NL {...props} 
      className={
        ({isActive}) => {
        return isActive ? 'is-active' : undefined
      }}
      to={to}> 
      {children} 
      </NL>
    );
  }

export default NavLink;