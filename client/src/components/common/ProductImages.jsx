import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { useSelector } from 'react-redux';

export default function ProductImages() {

  const productImages = useSelector(state => state.product.productImages);

  const indicators = [];
  const imageGallery = [];

  productImages.forEach(image => {
    imageGallery.push(image)
    indicators.push(
      <img width="48px" src={image} />
    )
  })

  return (
    <Carousel
      animation='slide'
      autoPlay={false}
      IndicatorIcon={indicators}
      navButtonsAlwaysVisible={true}
      fullHeightHover={false}

      navButtonsWrapperProps={{
        style: { height: "auto" }
      }}
      navButtonsProps={{
        style: {
          backgroundColor: "#9D9EA2",
          color: "white",
        }
      }}
      
      indicatorIconButtonProps={{
        style: {
          backgroundColor: '#F4F4F4',
          width: '64px',
          height: '64px',
          borderRadius: '8px',
        }
      }}
      activeIndicatorIconButtonProps={{
        style: {
          border: '1px solid #17af26',
        }
      }}
      indicatorContainerProps={{
        style: {
          display: 'flex',
          justifyContent: 'center',
          marginTop: '25px',
          gap: '16px'
        }
      }}
    >
      {
        imageGallery.map((item, i) => 
          <ImageItem key={i} item={item} /> 
        )
      }
    </Carousel>
  )
}

function ImageItem(props) {
  return (
    <div className="currentimage">
      <img className="currentimage-img" src={props.item} />
    </div>
  )
}