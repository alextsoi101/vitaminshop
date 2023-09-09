import React from 'react';
import { useNavigate } from 'react-router-dom';
import { capitalise } from '../../utils/capitaliseFirstLetter';

const SearchResult = (props) => {

  const navigate = useNavigate();
  const clickSearchResult = () => {
    props.hideResults()
    navigate('/product/' + props.productId)
  }

  return (
    <li 
      className="search-result"
      onClick={clickSearchResult}
    >
      <div className="img-wrapper">
        <img src={props.image} alt="productimg" className="resultimg" />
      </div>
      <div className="result-text">
        <div className="result-name">
          {capitalise(props.name)}
        </div>
        <div className="result-price">
          ${props.price}.00
        </div>
      </div>
    </li>
  )
}

export default SearchResult;