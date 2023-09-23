import React, { useState, useEffect } from "react";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

const EditProductImages = (props) => {

  const [mainImage, setMainImage] = useState(null);
  const [imagesURL, setImagesURL] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (props.images) {
      setImages(props.images)
    }
  }, [])

  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];

  const setNewImage = (e) => {
    if (e.target.files.length === 0) return

    const type = e.target.files[0].type
    if (!allowedTypes.includes(type)) return

    setImages([...images, e.target.files[0]])
    setImageFiles([...imageFiles, e.target.files[0]])
  }

  const removePhoto = (image) => {
    setImages(images.filter(img => img !== image))
    setImageFiles(imageFiles.filter(img => img !== image))
    setImagesURL(imagesURL.filter(img => img !== image))
  }

  const selectAsMain = (image) => {
    setImages([image, ...images.filter(img => img !== image)])
    
    if (typeof image !== 'string') {
      setImageFiles(imageFiles.filter(img => img !== image))
      setImageFiles([image, ...imageFiles])
    }

    if (typeof image === 'string') {
      setImagesURL(imagesURL.filter(img => img !== image))
      setMainImage(image)
    }
  }

  return (
    <div className="editproductimages">
      <div className="editproductimages-header">
        Edit Product Media
      </div>
      <div className="image-gallery">
        <div className="add-image">
          <label htmlFor='productimageinput' />
          <input 
            type='file'
            id='productimageinput'
            accept='image/jpeg, image/jpg, image/png'
            onChange={(event) => setNewImage(event)}
          />
          <div className="icon-wrapper">
            <AddAPhotoIcon sx={{fontSize: '40px'}}/>
          </div>
        </div>
        <ul className="image-list">
          {
            images.map(image => 
              <li className="image-list-item">
                <div className="image-list-item-image">
                  <img 
                    src={typeof image === 'string' ? image : URL.createObjectURL(image)} 
                    alt="product-image" 
                  />
                </div>
                <div className="item-image-info">
                  { images[0] === image &&
                    <div className="item-main-image">
                      Main image
                    </div>
                  }
                  <div className="info-text">
                  {typeof image === 'string' ? image : image.name}
                  </div>
                  <div className="info-buttons">
                    { images[0] !== image &&
                      <button 
                        className="select-main-button"
                        onClick={() => selectAsMain(image)}
                      >
                        Select as main
                      </button>
                    }
                    <button 
                      className="remove-button"
                      onClick={() => removePhoto(image)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default EditProductImages;