import React, { useState, useEffect } from 'react';
import SearchForm from '../forms/SearchForm';
import SearchResults from './SearchResults';

const Search = () => {

  const [isResultsVisible, setIsResultsVisible] = useState(false);

  const showResults = () => {
    setIsResultsVisible(true)
  }
  const hideResults = () => {
    setIsResultsVisible(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', hideResults);

    document.addEventListener("mousedown", (event) => {
      if (event.target.closest(".search") === null) {
        hideResults();
      } else {
        showResults()
      }
    });
  }, [])

  return (
    <div 
      className="search"
    >
      <SearchForm 
        showResults={showResults}
        hideResults={hideResults}
        isResultsVisible={isResultsVisible}
      />

      {isResultsVisible ? 
        <SearchResults 
          hideResults={hideResults}
        /> 
        : ""
      }
    </div>
  )
}

export default Search;