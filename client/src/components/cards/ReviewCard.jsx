import React from 'react';
import { capitalise } from '../../utils/capitaliseFirstLetter';

const ReviewCard = (props) => {

  const date = new Date(props.createdAt);
  const formatOptions = {year: 'numeric', month: 'long', day: 'numeric'};
  const reviewDate = date.toLocaleDateString('en-US', formatOptions);

  return (
    <div className="reviewcard">
      <div className="user-info">
        <img src={props.image} alt="userphoto" />
        <div className="user-name">{capitalise(props.name)}</div>
      </div>
      <hr />
      <div className="review-info">
        <div className="rating">{props.rating}</div>
        <div className="review-text-wrap">
          <div className="review-text">{capitalise(props.reviewText)}</div>
        </div>
        <div className="review-date">{reviewDate}</div>
      </div>
    </div>
  )
}

export default ReviewCard;