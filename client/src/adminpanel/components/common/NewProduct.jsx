import React from "react";
import AdminPanelInput from "../UI/AdminPanelInput";
import AdminPanelSelect from "../UI/AdminPanelSelect";
import AdminPanelSelectMany from "../UI/AdminPanelSelectMany";
import AdminPanelChipsInput from "../UI/AdminPanelChipsInput";
import AdminPanelTextArea from "../UI/AdminPanelTextArea";

const NewProduct = () => {

  return (
    <div className="newproduct">
      <div className="newproduct-header">
        Product Info
      </div>
      <div className="product-name">
        <AdminPanelInput 
          label='Product Name'
          placeholder='Product Name'
        />
      </div>
      <div className="product-price-instock">
        <AdminPanelInput 
          label='Price'
          suffix='.00 USD'
          placeholder='Product Price'
        />
        <AdminPanelSelect 
          label='In Stock'
          options={['In Stock', 'Out Of Stock']}
        />
      </div>
      <div className="product-categories">
        <AdminPanelSelectMany
          label='Category'
          options={[
            {text: 'For men', value: 1},
            {text: 'For women', value: 2},
            {text: 'For kids', value: 3}
          ]}
        />
      </div>
      <div className="product-sizes">
        <AdminPanelChipsInput
          label='Sizes'
          placeholder='Size'
        />
      </div>
      <div className="product-effects">
        <AdminPanelChipsInput
          label='Effects'
          placeholder='Effect'
        />
      </div>
      <div className="product-relieve">
        <AdminPanelChipsInput
          label='Relieve'
          placeholder='Relieve'
        />
      </div>
      <div className="product-ingridients">
        <AdminPanelChipsInput
          label='Ingridients'
          placeholder='Ingridient'
        />
      </div>
      <div className="product-shortdescription">
        <AdminPanelTextArea
          label='Short Description'
          placeholder='Short Description...'
        />
      </div>
      <div className="product-description">
        <AdminPanelTextArea
          label='Description'
          placeholder='Description...'
        />
      </div>
    </div>
  )
}

export default NewProduct;