import React from "react";
import AdminPanelInput from "../UI/AdminPanelInput";
import AdminPanelSelect from "../UI/AdminPanelSelect";
import AdminPanelSelectMany from "../UI/AdminPanelSelectMany";
import AdminPanelChipsInput from "../UI/AdminPanelChipsInput";
import AdminPanelTextArea from "../UI/AdminPanelTextArea";

const NewProduct = (props) => {

  const handleNameInput = (value) => {
    props.setName(value)
  }

  const handlePriceInput = (value) => {
    props.setPrice(value)
  }

  const handleInStockSelect = (value) => {
    props.setInstock(value)
  }

  const handleCategoriesSelect = (value) => {
    props.setCategoriesId(value)
  }

  const handleSizesInput = (value) => {
    props.setSizes(value)
  }

  const handleEffectsInput = (value) => {
    props.setEffects(value)
  }

  const handleRelieveInput = (value) => {
    props.setRelieve(value)
  }

  const handleIngridientsInput = (value) => {
    props.setIngridients(value)
  }

  const handleShortDescriptionInput = (value) => {
    props.setShortDescription(value)
  }

  const handleDescriptionInput = (value) => {
    props.setDescription(value)
  }

  return (
    <div className="newproduct">
      <div className="newproduct-header">
        Product Info
      </div>
      <div className="product-name">
        <AdminPanelInput 
          label='Product Name'
          placeholder='Product Name'
          onChange={handleNameInput}
        />
      </div>
      <div className="product-price-instock">
        <AdminPanelInput 
          label='Price'
          suffix='.00 USD'
          placeholder='Product Price'
          onChange={handlePriceInput}
        />
        <AdminPanelSelect 
          label='In Stock'
          options={[
            {text: 'In Stock', value: true},
            {text: 'Out Of Stock', value: false},
          ]}
          onChange={handleInStockSelect}
        />
      </div>
      <div className="product-categories">
        <AdminPanelSelectMany
          label='Category'
          options={[
            {text: 'For men', value: 1},
            {text: 'For women', value: 2},
            {text: 'For kids', value: 3},
            {text: 'Multivitamin', value: 4},
            {text: 'Vitamin A', value: 5},
            {text: 'Vitamin B', value: 6},
            {text: 'Vitamin C', value: 7},
            {text: 'Vitamin D', value: 8},
            {text: 'Omega', value: 9},
          ]}
          onChange={handleCategoriesSelect}
        />
      </div>
      <div className="product-sizes">
        <AdminPanelChipsInput
          label='Sizes'
          placeholder='Size'
          onChange={handleSizesInput}
        />
      </div>
      <div className="product-effects">
        <AdminPanelChipsInput
          label='Effects'
          placeholder='Effect'
          onChange={handleEffectsInput}
        />
      </div>
      <div className="product-relieve">
        <AdminPanelChipsInput
          label='Relieve'
          placeholder='Relieve'
          onChange={handleRelieveInput}
        />
      </div>
      <div className="product-ingridients">
        <AdminPanelChipsInput
          label='Ingridients'
          placeholder='Ingridient'
          onChange={handleIngridientsInput}
        />
      </div>
      <div className="product-shortdescription">
        <AdminPanelTextArea
          label='Short Description'
          placeholder='Short Description...'
          onChange={handleShortDescriptionInput}
        />
      </div>
      <div className="product-description">
        <AdminPanelTextArea
          label='Description'
          placeholder='Description...'
          onChange={handleDescriptionInput}
        />
      </div>
    </div>
  )
}

export default NewProduct;