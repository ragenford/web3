import React from 'react';
import Logo from './../../images/logoVinci.png'

console.log(Logo);
const Header = (props) => {

  return (
    <div>
         <img src={Logo} alt="Logo" />
        <h1> {props.course}</h1>
    </div>
    
  )
}

export default Header