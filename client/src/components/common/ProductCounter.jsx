import React from 'react';
import minusicon from '../../assets/icons/minus.svg';
import plusicon from '../../assets/icons/plus.svg';

const ProductCounter = (props) => {
  return (
    <div className="productcounter">
      <button
        onClick={props.decreaseCount}
      >
        <img src={minusicon} alt="minusicon" />
      </button>
      <div className='count'>{props.productCount}</div>
      <button
        onClick={props.increaseCount}
      >
        <img src={plusicon} alt="plusicon" />
      </button>
    </div>
  )
}



export default ProductCounter;
