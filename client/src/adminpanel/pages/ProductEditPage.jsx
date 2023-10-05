import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditProduct from "../components/common/EditProduct";
import EditProductImages from "../components/common/EditProductImages";
import { useSelector, useDispatch } from "react-redux";
import { loadProductInfo, editProduct } from "../../store/adminSlice";
import { 
  openSuccessSnackbar, 
  openErrorSnackbar, 
  openAdminModal, 
  closeAdminModal } from "../../store/modalSlice";
import '../styles/pages/producteditpage.scss';

const ProductEditPage = () => {

  const dispatch = useDispatch();
  const productInfo = useSelector(state => state.admin.productInfo);

  const {id} = useParams();

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
  const [instock, setInstock] = useState(null);
  const [imageGallery, setImageGallery] = useState(null);

  useEffect(() => {
    dispatch(loadProductInfo(id))
  }, [productInfo])

  const editProductInfo = () => {
    dispatch(editProduct({
      id: id,
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
      if (data.type === 'admin/editProduct/fulfilled') {
        dispatch(openSuccessSnackbar('Product edited successfully'))
        dispatch(closeAdminModal())
      }
      if (data.type === 'admin/editProduct/rejected') {
        dispatch(openErrorSnackbar(data.error.message))
        dispatch(closeAdminModal())
      }
    })
  }

  const onClickEdit = () => {
    dispatch(openAdminModal({text: `Edit product ${name}`, callback: editProductInfo}))
  }

  return (
    <div className="producteditpage">
      <div className="page-header">
        <h2>Edit product <span>#{id}</span></h2>
      </div>
      <div className="page-main-content">
        <div className="editproduct-wrapper">
        {
          productInfo !== null &&
          <EditProduct 
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
        }
        </div>
        <div className="editproductimages-wrapper">
          {
            productInfo !== null &&
            <EditProductImages
              images={productInfo.images}
              setImageGallery={setImageGallery}
            />
          }
        </div>
        <div className="editproduct-wrapper">
          <button 
            className="edit-product-button"
            onClick={onClickEdit}
          >
            Edit product
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductEditPage;