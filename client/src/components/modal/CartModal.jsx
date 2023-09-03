import React from 'react';
import CartDrawer from '../MUI/CartDrawer';
import CartModalItemCard from '../cards/CartModalItemCard';
import PaymentMethods from '../common/PaymentMethods';
import CartEmpty from '../common/CartEmpty';
import {Link} from 'react-router-dom';
import closedarkicon from '../../assets/icons/close-dark.svg';
import { useSelector } from 'react-redux';

const CartModal = (props) => {

  const cartProducts = useSelector(state => state.cart.cartProducts);
  const cartSubTotal = useSelector(state => state.cart.subTotal);

  return (
    <CartDrawer
      closeCart={props.closeCart}
      isCartOpen={props.isCartOpen}
    >
      <div className="cartmodal">
        <div className="cartmodal-header">
          <div className="maintext">Your cart</div>
          <button 
            className="close-modal-btn"
            onClick={props.closeCart}
          >
            <img src={closedarkicon} alt="closeicon" />
          </button>
        </div>

        { cartProducts.length === 0 ? <CartEmpty closeCart={props.closeCart} /> :
          <>
            <div className="cartmodal-cards">
              {
                cartProducts.map(cartProduct => 
                  <CartModalItemCard 
                    key={cartProduct.id}
                    cartProductId={cartProduct.id}
                    image={cartProduct.product.images[0]}
                    name={cartProduct.product.name}
                    size={cartProduct.selectedSize}
                    price={cartProduct.product.price}
                    totalPrice={cartProduct.totalPrice}
                    count={cartProduct.count}
                  />
                )
              }
            </div>

            <div className="cartmodal-total">
              <div className="total-text">TOTAL</div>
              <div className="total-price">${cartSubTotal}.00</div>
            </div>

            <div className="button-section">
              <Link to='/cart' className="link-to">
                <button 
                  className="checkout-btn"
                  onClick={props.closeCart}
                >
                  Checkout
                </button>
              </Link>
            </div>

            <div className="payment-info">
              <div className="payment-info-text">
                SECURE PAYMENTS PROVIDED BY
              </div>
              <div className="payment-info-methods">
                <PaymentMethods />
              </div>
            </div>
          </>
        }

      </div>
    </CartDrawer>
  )
}

export default CartModal;