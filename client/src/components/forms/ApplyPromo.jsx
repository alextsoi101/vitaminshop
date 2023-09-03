import React from 'react';
import { useState } from 'react';
import ButtonLoader from '../loaders/ButtonLoader';
import { useSelector, useDispatch } from 'react-redux';
import { checkPromocode } from '../../store/promoSlice';

const ApplyPromo = () => {

  const dispatch = useDispatch();
  const userId = useSelector(state => state.user.userId);
  const promocode = useSelector(state => state.promo.promocode);
  const percentDiscount = useSelector(state => state.promo.percentDiscount);
  const promoError = useSelector(state => state.promo.promoError);
  const isLoading = useSelector(state => state.promo.isCheckPromoLoading);

  const [promoText, setPromoText] = useState('');

  const changeInput = (e) => {
    setPromoText(e.target.value)
  }

  const applyPromo = (e) => {
    e.preventDefault()
    if (promoText === '') return
    dispatch(checkPromocode({userId, promocode: promoText}))
  }

  return (
    <form 
      className="applypromo"
      onSubmit={(event) => applyPromo(event)}
    >
      <div className="applypromo-form">
        <input 
          type="text" 
          placeholder="Apply promo..."
          onChange={(event) => changeInput(event)}
        />
        <button
          type='submit'
        >
          {isLoading ? <ButtonLoader /> : 'Apply Promo'}
        </button>
      </div>

      { percentDiscount > 0 ?
        <div className="promo-applied">
          <div className="applied-text">Promocode applied!</div>
          <div className="promo-info">
            <span className="promo-text">{promocode.toUpperCase()}</span> 
            <span className="percent-discount">{percentDiscount}% OFF</span>
          </div>
        </div>
        :
        <div className="promo-error">
          {promoError}
        </div>
      }

    </form>
  )
}

export default ApplyPromo;