import React from 'react';
import CategoryCard from '../components/cards/CategoryCard';
import menicon from '../assets/icons/categories-men.svg';
import womenicon from '../assets/icons/categories-women.svg';
import kidsicon from '../assets/icons/categories-kids.svg';

const Categories = () => {

  return (
    <div className="categories">
      <CategoryCard
        image={menicon}
        maintext="Men Health"
        description={
          `The Men's Vitamins offers a comprehensive 
          selection of nutritional supplements tailored 
          specifically to meet the unique health and wellness 
          needs of men. From supporting heart health and 
          boosting immune function to enhancing energy levels 
          and promoting muscle strength, these supplements are 
          crafted to help men maintain peak performance and lead 
          healthier lives. Explore our Men's Vitamins section to 
          find the right supplements that cater to your specific 
          health goals and requirements.`
        }
        link='/shop?category_id=1'
        linktext="Shop Vitamins for Men"
      />
      <CategoryCard
        image={womenicon}
        maintext="Women Health"
        description={
          `The Women's Vitamins is dedicated to providing 
          a wide array of nutritional supplements designed to 
          cater to the distinctive health and wellness needs of 
          women. Our thoughtfully selected range includes vitamins, 
          minerals, and other essential nutrients aimed at supporting 
          women's holistic well-being. Explore our Women's Vitamins 
          section to discover the
          perfect supplements that align 
          with your individual health goals and requirements, 
          helping you thrive at every stage of life.`
        }
        link='/shop?category_id=2'
        linktext="Shop Vitamins for Women"
      />
      <CategoryCard
        image={kidsicon}
        maintext="Kids"
        description={
          `Our carefully curated collection of nutritional supplements 
          is tailored to meet the unique needs of children. We understand 
          that parents want the best for their kids, which is why we 
          offer a range of vitamins, minerals, and other essential 
          nutrients that support healthy development, strong immunity, 
          and overall well-being. From delicious gummy vitamins to 
          easy-to-swallow capsules, our products are designed to make 
          nutrition fun and accessible for children of all ages. 
          Explore our Kids Vitamins section to find supplements that 
          will help your child thrive and grow while providing peace 
          of mind to parents concerned about their kids' health.`
        }
        link='/shop?category_id=3'
        linktext="Shop Vitamins for Kids"
      />
    </div>
  )
}

export default Categories;
