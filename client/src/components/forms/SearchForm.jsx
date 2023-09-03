import React from 'react';
import { useState, useCallback } from 'react';
import ButtonLoader from '../loaders/ButtonLoader';
import searchicon from '../../assets/icons/search.svg';
import { useSelector, useDispatch } from 'react-redux';
import { searchProducts } from '../../store/searchSlice';

const SearchForm = (props) => {

  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.search.isLoading);

  const [searchText, setSearchText] = useState('');

  const startSearching = useCallback(() => {
    dispatch(searchProducts(searchText))
  }, [searchText]);

  const submitSearchForm = (e) => {
    e.preventDefault()
    if (isLoading) return
    if (searchText === '') return
    startSearching()
    dispatch(searchProducts(searchText))
  }

  return (
    <form 
      className="searchform"
      onSubmit={(event) => submitSearchForm(event)}
    >
      <input 
        type="text" 
        placeholder="Search products..." 
        onChange={(event) => setSearchText(event.target.value)}
        style={props.isResultsVisible ? 
          {border: '1px solid #D6D6D6', borderRadius: '5px'}
          :
          {border: 'none', borderRadius: '100px'}
        }
      />
      <button
        type='submit'
      >
        {isLoading ? <ButtonLoader /> : <img src={searchicon} alt="searchicon" />}
      </button>
    </form>
  )
}

export default SearchForm;