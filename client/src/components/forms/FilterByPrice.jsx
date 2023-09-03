import React from 'react';
import PriceSlider from '../MUI/PriceSlider';

const FilterByPrice = (props) => {

  const choosePriceRangeUI = (minPrice, maxPrice) => {
    props.setPriceRangeUI([minPrice, maxPrice])
  }

  const submitPriceForm = (e) => {
    e.preventDefault()
    props.choosePriceRange(props.priceRangeUI[0], props.priceRangeUI[1])
  }

  return (
    <form 
      className="filterbyprice"
      onSubmit={(event) => submitPriceForm(event)}
    >
      <div className="maintext">FILTER BY PRICE</div>
      <div className="slider">
        <div className="slider-values">
          <div className="input-container">
            <span>$</span>
            <input 
              type="textfield" 
              value={props.priceRangeUI[0]}
            />
          </div>
          <div className="input-container">
            <span>$</span>
            <input 
              type="text"
              value={props.priceRangeUI[1]}
            />
          </div>
        </div>
        <div className="priceslider">
          <PriceSlider
            choosePriceRangeUI={choosePriceRangeUI}
            priceRangeUI={props.priceRangeUI}
          />
        </div>
      </div>
      <button 
        type='submit'
      >
        Apply
      </button>
    </form>
  )
}

export default FilterByPrice;
