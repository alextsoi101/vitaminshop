import React from 'react';
import Rating from '@mui/material/Rating';
import staricon from '../../assets/icons/star.svg';
import stargreyicon from '../../assets/icons/star-grey.svg';

const ProductRating = (props) => {
  return (
    <Rating
      readOnly
      value={props.value}
      precision={1}
      icon={<img src={staricon} alt="staricon" />}
      emptyIcon={<img src={stargreyicon} alt="stargreyicon" />}
      sx={{
        'gap': "4px"
      }}
    />
  )
}

export default ProductRating;