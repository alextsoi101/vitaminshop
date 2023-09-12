import React from 'react';
import ProductCard from '../cards/ProductCard';

const FeaturedProducts = (props) => {
  return (
    <div className="featuredproducts">
      <div className="featuredproducts-content-wrapper">
        <div className="featuredproducts-maintext">Featured Products</div>
        <div className="featuredproducts-cards">
          {
            props.featuredProducts.map(product => 
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

export default FeaturedProducts;
