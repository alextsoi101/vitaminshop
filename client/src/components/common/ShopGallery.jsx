import React from 'react';
import ProductCard from '../cards/ProductCard';

const ShopGallery = (props) => {
  return (
    <div className="shopgallery">

      {props.products.map((product) => 
        <div className="shopgallery-product">
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
        </div>
      )}
      
    </div>
  )
}

export default ShopGallery;
