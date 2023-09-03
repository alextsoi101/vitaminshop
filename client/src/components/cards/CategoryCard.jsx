import React from 'react';
import {Link} from 'react-router-dom';

const CategoryCard = (props) => {
  return (
    <div className="categorycard">
      <div className="categorycard-img">
        <img src={props.image} alt="categoryimage" />
      </div>
      <h2>{props.maintext}</h2>
      <div className="categorycard-description">{props.description}</div>
      <div className="categorycard-link">
        <Link to={props.link}>{props.linktext}</Link>
      </div>
    </div>
  )
}

export default CategoryCard;