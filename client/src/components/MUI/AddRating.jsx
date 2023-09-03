import React from 'react';
import Rating from '@mui/material/Rating';
import staricon from '../../assets/icons/addratingstar.svg';
import staremptyicon from '../../assets/icons/addratingstar-empty.svg';

const AddRating = (props) => {
  return (
    <Rating
      value={props.value}
      precision={1}
      icon={<img src={staricon} alt="staricon" width="24px" />}
      emptyIcon={<img src={staremptyicon} alt="stargreyicon" width="24px" />}
      onKeyDown={e => e.preventDefault()}
      onChange={(event, newValue) => {
        props.changeRate(newValue);
      }}
    />
  )
}

export default AddRating;