import React from 'react';
import ProductCard from '../components/cards/ProductCard';

const RecentlyAdded = (props) => {
  return (
    <div className="recentlyadded">
      <div className="recentlyadded-content-wrapper">
        <h1>RECENTLY ADDED</h1>
        <div className="recentlyadded-cards">
          {
            props.recentlyAddedProducts.map( product => 
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
      </div>
    </div>
  )
}

export default RecentlyAdded;
