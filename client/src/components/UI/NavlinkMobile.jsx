import React from 'react';
import { Link } from 'react-router-dom';

const NavlinkMobile = (props) => {
  return (
    <Link 
      to={props.link} 
      className="routerlink-wrap"
    >
      <li 
        className="navlinkmobile"
        onClick={props.closeNavBarModal}
      >
        <span>{props.value}</span>
      </li>
    </Link>
  )
}

export default NavlinkMobile;