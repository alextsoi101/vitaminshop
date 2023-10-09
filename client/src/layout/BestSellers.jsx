import React from 'react';
import ProductCard from '../components/cards/ProductCard';
import InfoCard from '../components/cards/InfoCard';
import productimage from '../assets/images/mainsection.png';
import image from '../assets/images/mainsection1.png';

const BestSellers = (props) => {

  return (
    <div className="bestsellers">
      <div className="bestsellers-content-wrapper">
        <h1>SHOP OUR BEST SELLERS</h1>
        <div className="bestsellers-cards">
          <InfoCard 
            image={image}
            maintext="Shop our Best Sellers"
            description={
              `Discover our Shop Best Sellers, 
              where you can explore the most popular 
              and highly-rated products`
            }
            link="shop"
          />
          <div className="bestsellers-product-cards">
            {
              props.bestSellersProducts.map(product => 
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
    </div>
  )
}

export default BestSellers;
