import React, { useState, useEffect } from "react";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

const EditProductImages = (props) => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    if (props.images) {
      const urlToBlob = async (url) => {
        const response = await fetch(url);
        const blob = await response.blob();
        return new File([blob], url);
      };
  
      const loadImageFiles = async () => {
        const filePromises = props.images.map(url => urlToBlob(url));
        const files = await Promise.all(filePromises);
        setImages(files);
        props.setImageGallery(files);
      };
  
      loadImageFiles();
    }

  }, [props.images]);

  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];

  const setNewImage = (e) => {
    if (e.target.files.length === 0) return

    const type = e.target.files[0].type
    if (!allowedTypes.includes(type)) return

    const newImagesArray = [...images, e.target.files[0]];

    setImages(newImagesArray);
    props.setImageGallery(newImagesArray);
  }

  const removePhoto = (image) => {
    const filteredImages = images.filter(img => img !== image);
    setImages(filteredImages)
    props.setImageGallery(filteredImages)
  }

  const selectAsMain = (image) => {
    const filteredImages = images.filter(img => img !== image);
    const newImagesArray = [image, ...filteredImages];

    setImages(newImagesArray);
    props.setImageGallery(newImagesArray);
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
            images.map((image, index) => 
              <li className="image-list-item" key={index}>
                <div className="image-list-item-image">
                  <img 
                    src={URL.createObjectURL(image)} 
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
                    {image.name}
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