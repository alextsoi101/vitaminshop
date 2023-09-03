import React from 'react';

const ShopCategory = (props) => {
  return (
    <div className="shopcategory">
      <h2>{props.name}</h2>
      <div className="description">
        {props.description}
      </div>
    </div>
  )
}

export default ShopCategory;
