import React, { useRef } from 'react';
import ProductRating from '../MUI/ProductRating';

const FilterByRating = (props) => {

  const checkboxRef1 = useRef(1);
  const checkboxRef2 = useRef(2);
  const checkboxRef3 = useRef(3);
  const checkboxRef4 = useRef(4);
  const checkboxRef5 = useRef(5);

  const checkRating = (ref) => {
    if (!props.checkedRatings.includes(ref.current)) {
      props.setCheckedRatings([...props.checkedRatings, ref.current])
    }
    else {
      props.setCheckedRatings(
        props.checkedRatings.filter(rate => rate !== ref.current)
      )
    }
  }

  const isChecked = (ref) => {
    if (props.checkedRatings.includes(ref.current)) {
      return true
    }
    return false
  }

  const submitRatingForm = (e) => {
    e.preventDefault()
    props.chooseRatingFilter(props.checkedRatings)
  }

  return (
    <form 
      className="filterbyreviews"
      onSubmit={event => submitRatingForm(event)}
    >
      <div className="maintext">FILTER BY REVIEWS</div>
      <div className="labels">
        <label>
          <input 
            type="checkbox"
            onClick={() => checkRating(checkboxRef5)}
            checked={isChecked(checkboxRef5)}
          />
          <span className="rating">
            <ProductRating value={5} />
          </span>
        </label>
        <label>
          <input 
            type="checkbox"
            onClick={() => checkRating(checkboxRef4)}
            checked={isChecked(checkboxRef4)}
          />
          <span className="rating">
            <ProductRating value={4} />
          </span>
        </label>
        <label>
          <input 
            type="checkbox"
            onClick={() => checkRating(checkboxRef3)}
            checked={isChecked(checkboxRef3)}
          />
          <span className="rating">
            <ProductRating value={3} />
          </span>
        </label>
        <label>
          <input 
            type="checkbox"
            onClick={() => checkRating(checkboxRef2)}
            checked={isChecked(checkboxRef2)}
          />
          <span className="rating">
            <ProductRating value={2} />
          </span>
        </label>
        <label>
          <input 
            type="checkbox"
            onClick={() => checkRating(checkboxRef1)}
            checked={isChecked(checkboxRef1)}
          />
          <span className="rating">
            <ProductRating value={1} />
          </span>
        </label>
      </div>
      <button type='submit'>Apply</button>
    </form>
  )
}

export default FilterByRating;
