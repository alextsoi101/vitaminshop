import React from 'react';
import { Link } from 'react-router-dom';
import mainimage from '../assets/images/mainsection.png';

const MainSection = () => {
  return (
    <section>
      <div className="mainsection-text">
        <p className="bestseller">BEST SELLER</p>
        <h1>
          BEST OFFER TO BUY 
          VITAMINS ONLINE 
        </h1>
        <p className="vitamins-supplements">Vitamins & Supplements</p>
        <p className="freeshipping">Get your bonus<span>|</span>Free shipping</p>
        <Link to='shop'>
          <button>Shop All</button>
        </Link>
      </div>
      <div className="mainsection-img">
        <img src={mainimage} alt="" />
      </div>
    </section>
  )
}

export default MainSection;
