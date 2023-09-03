import React from 'react';
import star from '../../assets/icons/star.svg';
import stargrey from '../../assets/icons/star-grey.svg';

const ReviewStar = (props) => {
  return (
    <img
      src={props.grey ? stargrey : star}
      alt="star"
      width="16px"
      height="16px"
    />
  )
}

export default ReviewStar;
