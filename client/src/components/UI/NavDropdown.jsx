import React from 'react';
import { Link } from 'react-router-dom';

const NavDropdown = (props) => {

  return (
    <li className="dropdown">
      <div className="dropdown-toggle">
        <span>{props.title}</span>
      </div>
      <div className="dropdown-container">
        <ul className="dropdown-menu">
          {props.items.map((item, index) => 
            <Link to={item.link} key={index}>
              <li>{item.text}</li>
            </Link>
          )}
        </ul>
      </div>
    </li>
  )
}

export default NavDropdown;