import React from 'react';
import CartItemCard from '../cards/CartItemCard';
import CartEmpty from '../common/CartEmpty';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartProducts = useSelector(state => state.cart.cartProducts);

  return (
    <div className="cart">
      <div className="cart-header">
        <div className="maintext">Your cart</div>
        <div className="cart-item-count">
          ( {cartProducts.length} )
        </div>
      </div>

      { cartProducts.length === 0 ? <CartEmpty /> :
        <div className="cart-cards">
          {
            cartProducts.map((cartProduct) => 
              <CartItemCard 
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
      }
    </div>
  )
}

export default Cart;