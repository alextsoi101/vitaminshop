import React from 'react';
import { Link } from 'react-router-dom';

const InfoCard = (props) => {
  return (
    <div className="infocard">
        <img src={props.image} alt="infoimage" />
        <div className="infocard-text">
          <p className="info-maintext">
            {props.maintext}
          </p>
          <div className="info-description">
            {props.description}
          </div>
          <Link to={props.link} className="info-link">View all</Link>
        </div>
    </div>
  )
}

export default InfoCard;