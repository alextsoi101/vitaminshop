import React from "react";
import AdminPanelInput from "../UI/AdminPanelInput";
import AdminPanelSelect from "../UI/AdminPanelSelect";
import AdminPanelSelectMany from "../UI/AdminPanelSelectMany";
import AdminPanelChipsInput from "../UI/AdminPanelChipsInput";
import AdminPanelTextArea from "../UI/AdminPanelTextArea";

const EditProduct = () => {

  return (
    <div className="editproduct">
      <div className="editproduct-header">
        Edit Product Info
      </div>
      <div className="product-name">
        <AdminPanelInput 
          label='Product Name'
          placeholder='Product Name'
          defaultValue='Test input value'
        />
      </div>
      <div className="product-price-instock">
        <AdminPanelInput 
          label='Price'
          suffix='.00 USD'
          placeholder='Product Price'
          defaultValue='1000'
        />
        <AdminPanelSelect 
          label='In Stock'
          options={['In Stock', 'Out Of Stock']}
          selectedValueIndex={1}
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
          selectedOptions={['For women', 'For men']}
        />
      </div>
      <div className="product-sizes">
        <AdminPanelChipsInput
          label='Sizes'
          placeholder='Size'
          defaultChips={['12oz', '22oz']}
        />
      </div>
      <div className="product-effects">
        <AdminPanelChipsInput
          label='Effects'
          placeholder='Effect'
          defaultChips={['effect', 'effect']}
        />
      </div>
      <div className="product-relieve">
        <AdminPanelChipsInput
          label='Relieve'
          placeholder='Relieve'
          defaultChips={['relieve', 'relieve']}
        />
      </div>
      <div className="product-ingridients">
        <AdminPanelChipsInput
          label='Ingridients'
          placeholder='Ingridient'
          defaultChips={['ingridient', 'ingridient']}
        />
      </div>
      <div className="product-shortdescription">
        <AdminPanelTextArea
          label='Short Description'
          placeholder='Short Description...'
          defaultValue='short description'
        />
      </div>
      <div className="product-description">
        <AdminPanelTextArea
          label='Description'
          placeholder='Description...'
          defaultValue='description'
        />
      </div>
    </div>
  )
}

export default EditProduct;