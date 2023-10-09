import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/cards/ProductCard';

const ChooseVitamins = (props) => {

  const [category, setCategory] = useState('men')

  return (
    <div className="choosevitamins">
      <div className="choosevitamins-content-wrapper">
        <h1>CHOOSE YOUR VITAMINS</h1>
        <div className="category-buttons">
            <div className="filterby">Filter by Category</div>
            <div className="button-group">
              <button
                onClick={() => setCategory('men')}
                className={category === 'men' ? "categorybtn-active" : "categorybtn"}
              >
                For Men
              </button>
              <button
                onClick={() => setCategory('women')}
                className={category === 'women' ? "categorybtn-active" : "categorybtn"}
              >
                For Women
              </button>
              <button
                onClick={() => setCategory('kids')}
                className={category === 'kids' ? "categorybtn-active" : "categorybtn"}
              >
                Kids
              </button>
              <button
                onClick={() => setCategory('omega')}
                className={category === 'omega' ? "categorybtn-active" : "categorybtn"}
              >
                Omega
              </button>
            </div>
        </div>
        <div className="product-cards">
          
          { category === 'men' && 
            props.menProducts.map(product => 
              <ProductCard 
                key={product.id}
                product={product}
                productId={product.id}
                productimage={product.images[0]}
                name={product.name}
                rating={product.rating}
                reviewCount={product.reviews.length}
                categories={product.categories}
                price={product.price}
                sizes={product.sizes}
                instock={product.instock}
              />
            )
          }

          { category === 'women' && 
            props.womenProducts.map(product => 
              <ProductCard 
                key={product.id}
                product={product}
                productId={product.id}
                productimage={product.images[0]}
                name={product.name}
                rating={product.rating}
                reviewCount={product.reviews.length}
                categories={product.categories}
                price={product.price}
                sizes={product.sizes}
                instock={product.instock}
              />
            )
          }

          { category === 'kids' && 
            props.kidsProducts.map(product => 
              <ProductCard 
                key={product.id}
                product={product}
                productId={product.id}
                productimage={product.images[0]}
                name={product.name}
                rating={product.rating}
                reviewCount={product.reviews.length}
                categories={product.categories}
                price={product.price}
                sizes={product.sizes}
                instock={product.instock}
              />
            )
          }

          { category === 'omega' && 
            props.omegaProducts.map(product => 
              <ProductCard 
                key={product.id}
                product={product}
                productId={product.id}
                productimage={product.images[0]}
                name={product.name}
                rating={product.rating}
                reviewCount={product.reviews.length}
                categories={product.categories}
                price={product.price}
                sizes={product.sizes}
                instock={product.instock}
              />
            )
            
          }
          
        </div>
        <div className="startshopping">
          <div className="startshopping-text">
            <h1>Start Shopping!</h1>
            <div className="startshopping-bonus">And get <span>Free Shipping</span></div>
          </div>
          <Link to='shop'>
            <button>Start shopping</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ChooseVitamins;
