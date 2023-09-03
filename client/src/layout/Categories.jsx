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
          `This type of cannabis is commonly taken by those 
          who want to sink into a state of total relaxation 
          in every limb. This reduces stress overall and 
          can take your worries and fatigue away. Because 
          of its relaxing effects, it is suggested to use 
          this type of cannabis at night. It is particularly 
          recommended for people who have trouble sleeping, 
          be it due to insomnia, pain or other associated 
          sleep issues.`
        }
        link='/shop?category_id=1'
        linktext="Shop Vitamins for Men"
      />
      <CategoryCard
        image={womenicon}
        maintext="Women Health"
        description={
          `This type of cannabis is commonly taken by those 
          who want to sink into a state of total relaxation 
          in every limb. This reduces stress overall and 
          can take your worries and fatigue away. Because 
          of its relaxing effects, it is suggested to use 
          this type of cannabis at night. It is particularly 
          recommended for people who have trouble sleeping, 
          be it due to insomnia, pain or other associated 
          sleep issues.`
        }
        link='/shop?category_id=2'
        linktext="Shop Vitamins for Women"
      />
      <CategoryCard
        image={kidsicon}
        maintext="Kids"
        description={
          `This type of cannabis is commonly taken by those 
          who want to sink into a state of total relaxation 
          in every limb. This reduces stress overall and 
          can take your worries and fatigue away. Because 
          of its relaxing effects, it is suggested to use 
          this type of cannabis at night. It is particularly 
          recommended for people who have trouble sleeping, 
          be it due to insomnia, pain or other associated 
          sleep issues.`
        }
        link='/shop?category_id=3'
        linktext="Shop Vitamins for Kids"
      />
    </div>
  )
}

export default Categories;
