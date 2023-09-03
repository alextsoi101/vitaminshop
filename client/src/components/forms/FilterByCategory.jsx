import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { capitalise } from '../../utils/capitaliseFirstLetter';
import { useSelector } from 'react-redux';

const FilterByCategory = (props) => {

  const categories = useSelector(state => state.shop.categories);
  const totalCountAllCategories = useSelector(state => state.shop.totalCountAllCategories);
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get('category_id') || 'all'

  const isChecked = (checkedCategory) => {
    if (categoryId === checkedCategory.toString()) {
      return true
    }
    return false
  }

  return (
    <form className="filterbycategory">
      <div className="maintext">PRODUCT CATEGORY</div>
      <div className="labels">
        <label>
          <input 
            type="radio" 
            name="radio"
            onClick={() => props.chooseCategory('all')}
            checked={isChecked('all')}
          />
          <span className="category-name">All categories</span>
          <span className="category-count">{totalCountAllCategories}</span>
        </label>
        {
          categories.map(category => 
            <label key={category.id}>
              <input 
                type="radio" 
                name="radio"
                onClick={() => props.chooseCategory(category.id)}
                checked={isChecked(category.id)}
              />
              <span className="category-name">{capitalise(category.name)}</span>
              <span className="category-count">{category.products.length}</span>
            </label>
          )
        }
      </div>
    </form>
  )
}

export default FilterByCategory;
