import React from 'react';
import { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import AddRating from '../MUI/AddRating';
import ButtonLoader from '../loaders/ButtonLoader';
import { useSelector, useDispatch } from 'react-redux';
import { addProductReview, setReviewError } from '../../store/productSlice';
import { openLoginModal, openSignUpModal, openSuccessSnackbar, openErrorSnackbar } from '../../store/modalSlice';

const AddReview = () => {

  const dispatch = useDispatch();
  const userId = useSelector(state => state.user.userId);
  const isLogin = useSelector(state => state.user.isLogin);
  const reviewAddedText = useSelector(state => state.product.reviewAddedText);
  const reviewError = useSelector(state => state.product.reviewError);
  const isLoading = useSelector(state => state.product.isAddReviewLoading);
  const {id} = useParams();

  const ratingRef = useRef(null);
  const nameRef = useRef(null);
  const nameInputRef = useRef(null);
  const reviewRef = useRef(null);
  const reviewInputRef = useRef(null);

  const [rate, setRate] = useState(null);
  const [name, setName] = useState('');
  const [review, setReview] = useState('');

  const changeRate = (newValue) => {
    setRate(newValue)
  }

  const changeName = (e) => {
    setName(e.target.value)
  }

  const changeReview = (e) => {
    setReview(e.target.value)
  }

  const toLogin = () => {
    dispatch(openLoginModal())
  }

  const toSignUp = () => {
    dispatch(openSignUpModal())
  }

  const addReview = (e) => {
    if (e.keyCode === 13 ) {
      e.preventDefault();
    }
    e.preventDefault()
    if (isLoading) return
    if (rate === null) {
      ratingRef.current.style.color = '#EB2606';
      dispatch(setReviewError('Choose your rate'))
      return
    } 
    else {
      ratingRef.current.style = null
    }

    if (name === '' || name === null) {
      nameRef.current.style.color = '#EB2606';
      nameInputRef.current.style.borderColor = '#E45A45';
      dispatch(setReviewError('Choose your rate'))
      return
    } 
    else {
      nameRef.current.style = null
      nameInputRef.current.style = null;
    }

    if (review === '' || review === null) {
      reviewRef.current.style.color = '#EB2606';
      reviewInputRef.current.style.borderColor = '#E45A45';
      dispatch(setReviewError('Review cannot be empty'))
      return
    }
    else {
      reviewRef.current.style = null;
      reviewInputRef.current.style = null;
    }
    ratingRef.current.style = null;
    reviewRef.current.style = null;
    reviewInputRef.current.style = null;

    dispatch(addProductReview({userId, productId: id, name, rate, review}))
      .then((data) => {
        if (data.type === 'product/addReview/fulfilled') {
          dispatch(openSuccessSnackbar('Review added succesfully!'))
        }
        if (data.type === 'product/addReview/rejected') {
          dispatch(openErrorSnackbar(data.error.message))
        }
      })
  }

  return (
    <form 
      className="addreview" 
      id='addreview-form'
      onSubmit={addReview}
    >
      <div className="maintext">Add Review</div>
      <div className="add-rating">
        <div 
          className="add-rating-text"
          ref={ratingRef}
        >
          Your rating <span>*</span>
        </div>
        <div className="rating">
          <AddRating 
            changeRate={changeRate}
          />
        </div>
      </div>
      <div className="write-name" >
        <div 
          className="your-name-text"
          ref={nameRef}
        >
          Your name <span>*</span>
        </div>
        <input 
          placeholder="Your name..."
          ref={nameInputRef}
          onChange={event => changeName(event)}
        />
      </div>
      <div className="write-review" >
        <div 
          className="your-review-text"
          ref={reviewRef}
        >
          Your review <span>*</span>
        </div>
        <textarea 
          placeholder="Write review..."
          ref={reviewInputRef}
          onChange={event => changeReview(event)}
        >
        </textarea>
      </div>
      <div className="review-status">
        { reviewError === null ? 
          <span className="reviewadded">{reviewAddedText}</span>
          :
          <span className="reviewerror">{reviewError}</span>
        }
      </div>
      { isLogin ? 
        <button 
          className="submit-btn"
          type='submit'
        >
          {isLoading ? <ButtonLoader /> : <div>Submit</div>}
        </button>
        :
        <div className="review-nologin">
          <span onClick={toLogin}>Login</span> or <span onClick={toSignUp}>Sign Up</span> to add review.
        </div>
      }
    </form>
  )
}

export default AddReview;