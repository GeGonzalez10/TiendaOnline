import React from 'react';
import { NavLink } from 'react-router-dom';

const Link = ({to,children})=>{
  return (
    <NavLink {...{
      style:{
        textDecoration: "none",
        fontSize:"16px",
        color:"#333333",
	fontWeight:"700"
      },
      to,
      activeStyle:{
	color:"#0038B8",
	fontWeight:"700"
      }
      }}>
      {children}
    </NavLink>
  )
}

export default Link;
