import React from 'react';
import { Link } from 'react-router-dom';

const Navlink = (props) => {
  return (
    <Link 
      to={props.link} 
      className="routerlink-wrap"
    >
      <li className="navlink">
        <span>{props.value}</span>
      </li>
    </Link>
  )
}

export default Navlink;