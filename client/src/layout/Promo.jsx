import React, { useEffect } from 'react';
import Timer from '../components/UI/Timer';
import { useSelector, useDispatch } from 'react-redux';
import { loadPromo } from '../store/promoSlice';

const Promo = () => {

  const dispatch = useDispatch();
  const promo = useSelector(state => state.promo.sectionPromo);
  const isLoading = useSelector(state => state.promo.isSectionPromoLoading);

  const percentDiscount = promo ? promo.percentDiscount : '';
  const promocode = promo ? promo.promocode : '';
  const expirationDate = promo ? promo.expirationDate : null;

  useEffect(() => {
    dispatch(loadPromo('VITAMIN30'))
  }, [])

  if (isLoading) return
  return (
    <div className="promo">
      <div className="main-text">
        <span className="limited-offer-text">LIMITED OFFER:</span>
        <span className="promovalue"> {percentDiscount}%</span> OFF. Use
        <span className="promocode"> {promocode.toUpperCase()}</span> at Checkout
      </div>

        { expirationDate && 
          <div className="timer">
            <Timer 
              expirationDate={expirationDate}
            />
          </div>
        } 

    </div>
  )
}

export default Promo;
