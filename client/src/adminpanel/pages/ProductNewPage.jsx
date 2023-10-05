import React, { useState } from "react";
import NewProduct from "../components/common/NewProduct";
import NewProductImages from "../components/common/NewProductImages";
import { useDispatch } from "react-redux";
import { addNewProduct } from "../../store/adminSlice";
import { 
  openSuccessSnackbar, 
  openErrorSnackbar, 
  openAdminModal, 
  closeAdminModal } from "../../store/modalSlice";
import '../styles/pages/productnewpage.scss';

const ProductNewPage = () => {

  const dispatch = useDispatch();

  const [categoriesId, setCategoriesId] = useState(null);
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [rating, setRating] = useState(5);
  const [sizes, setSizes] = useState(null);
  const [effects, setEffects] = useState(null);
  const [relieve, setRelieve] = useState(null);
  const [ingridients, setIngridients] = useState(null);
  const [description, setDescription] = useState(null);
  const [shortDescription, setShortDescription] = useState(null);
  const [instock, setInstock] = useState(true);
  const [imageGallery, setImageGallery] = useState(null);

  const createNewProduct = () => {
    dispatch(addNewProduct({
      categoriesId: categoriesId,
      name: name,
      price: price,
      rating: rating,
      sizes: sizes,
      effects: effects,
      relieve: relieve,
      ingridients: ingridients,
      description: description,
      shortDescription: shortDescription,
      instock: instock,
      imageGallery: imageGallery
    }))
    .then(data => {
      if (data.type === 'admin/addNewProduct/fulfilled') {
        dispatch(openSuccessSnackbar('Product successfully created'))
        dispatch(closeAdminModal())
      }
      if (data.type === 'admin/addNewProduct/rejected') {
        dispatch(openErrorSnackbar(data.error.message))
        dispatch(closeAdminModal())
      }
    })
  }

  const onClickCreate = () => {
    dispatch(openAdminModal({text: `Create product ${name}`, callback: createNewProduct}))
  }

  return (
    <div className="productnewpage">
      <div className="page-header">
        <h2>New product</h2>
      </div>
      <div className="page-main-content">
        <div className="newproduct-wrapper">
          <NewProduct
            setCategoriesId={setCategoriesId}
            setName={setName}
            setPrice={setPrice}
            setRating={setRating}
            setSizes={setSizes}
            setEffects={setEffects}
            setRelieve={setRelieve}
            setIngridients={setIngridients}
            setDescription={setDescription}
            setShortDescription={setShortDescription}
            setInstock={setInstock}
          />
        </div>
        <div className="newproductimages-wrapper">
          <NewProductImages
            setImageGallery={setImageGallery}
          />
        </div>
        <div className="newproductcreate-wrapper">
          <button 
            className="create-product-button"
            onClick={onClickCreate}
          >
            Create product
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductNewPage;