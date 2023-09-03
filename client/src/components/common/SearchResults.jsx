import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchResult from './SearchResult';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchResults } from '../../store/searchSlice';

const SearchResults = (props) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchResults = useSelector(state => state.search.searchResults);

  const handleClickShopAll = () => {
    props.hideResults()
    dispatch(setSearchResults(null))
    navigate('/shop')
  }

  if (searchResults === null) return ''
  return (
    <div className="search-results">

      {searchResults.length === 0 &&
        <div className="search-results-empty">
          No results
        </div>
      }

      <ul>
        {
          searchResults.map((product) => 
            <SearchResult 
              key={product.id}
              productId={product.id}
              image={product.images[0]}
              name={product.name}
              price={product.price}
              hideResults={props.hideResults}
            />
          )
        }
      </ul>
      
      <button
        onClick={handleClickShopAll}
      >
        SHOP ALL
      </button>
    </div>
  )
}

export default SearchResults;