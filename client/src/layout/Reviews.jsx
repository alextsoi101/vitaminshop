import React from 'react';
import Carousel from 'react-material-ui-carousel';
import ReviewCard from '../components/cards/ReviewCard';
import arrowleft from '../assets/icons/arrowleft.svg';
import arrowright from '../assets/icons/arrowright.svg';
import { useSelector } from 'react-redux';

const Reviews = (props) => {

  const reviewsIsLoading = useSelector(state => state.home.isLoading);

  if (reviewsIsLoading) return <div></div>
  return (
    <div className="reviews">
      <h1>CUSTOMER REVIEWS</h1>
      <div className="review-cards">
        <Carousel
          animation="slide"
          interval={4000}
          PrevIcon={<img src={arrowleft}/>}
          NextIcon={<img src={arrowright}/>}
          navButtonsAlwaysVisible
          fullHeightHover={false} 
          navButtonsProps={{
            style: {
              backgroundColor: "white"
            }
          }}
        >
          <div className="carousel-items">
            {
              props.reviews.map((review, index) => {
                if (index + 1 <= 3) {return (
                  <ReviewCard 
                    key={review.id}
                    className="card-margin"
                    image={review.user.image}
                    name={review.name}
                    createdAt={review.createdAt}
                    rate={review.rate}
                    reviewText={review.review}
                  />
                )}
              })
            }
          </div>
          <div className="carousel-items">
            {
              props.reviews.map((review, index) => {
                if (index + 1 > 3 && index + 1 <= 6) {return (
                  <ReviewCard 
                    key={review.id}
                    className="card-margin"
                    image={review.user.image}
                    name={review.name}
                    createdAt={review.createdAt}
                    rate={review.rate}
                    reviewText={review.review}
                  />)}
              })
            }
          </div>
          <div className="carousel-items">
            {
              props.reviews.map((review, index) => {
                if (index + 1 > 6 && index + 1 <= 9) {return (
                  <ReviewCard 
                    key={review.id}
                    className="card-margin"
                    image={review.user.image}
                    name={review.name}
                    createdAt={review.createdAt}
                    rate={review.rate}
                    reviewText={review.review}
                  />)}
              })
            }
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default Reviews;
