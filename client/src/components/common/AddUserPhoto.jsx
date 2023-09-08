import React, { useState, useEffect } from 'react';
import defaultphoto from '../../assets/images/user.png';
import { useSelector } from 'react-redux';

const AddUserPhoto = ({setImageFile, setRemoveImage}) => {

  const userImage = useSelector(state => state.user.userImage);

  useEffect(() => {
    if (userImage) {
      setImageUrl(userImage)
    } else {
      setImageUrl(null)
    }
  }, [userImage])

  const [imageURL, setImageUrl] = useState(null);
  const [fileError, setFileError] = useState(null);
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];

  const setNewImage = (e) => {
    if (e.target.files.length === 0) return

    const type = e.target.files[0].type
    if (!allowedTypes.includes(type)) {
      setFileError('Only JPG, JPEG and PNG files allowed.')
      return
    }

    setRemoveImage(false)
    setImageUrl(URL.createObjectURL(e.target.files[0]))
    setImageFile(e.target.files[0])
    setFileError(null)
  }

  const removePhoto = () => {
    setRemoveImage(true)
    setImageUrl(null)
    setImageFile(null)
    setFileError(null)
  }
  
  return (
    <div className="adduserphoto">
      <div className="profilephototext">
        Profile photo
      </div>
      <div className="image-input">
        <img 
          src={imageURL || defaultphoto} 
          alt="user-image" 
        />
        <div className="label-info">
          <label 
            className="file-label"
            htmlFor="file-input"
          >
            Upload new photo
          </label>
          { imageURL && 
            <button
              className="remove-button"
              type='button'
              onClick={removePhoto}
            >
              Remove
            </button>
          }
          { fileError && 
            <div className="file-error">
              {fileError}
            </div>
          }
          <input 
            id="file-input"
            className="file-input"
            type='file'
            accept='image/jpeg, image/jpg, image/png'
            onChange={(event) => setNewImage(event)} 
          />
        </div>
      </div>
    </div>
  )
}

export default AddUserPhoto;