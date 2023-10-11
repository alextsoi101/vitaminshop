import React from 'react';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

const CustomSlider = styled(Slider)({
  color: 'grey',
  width: 244,
  height: 2,
  '& .MuiSlider-track': {
    border: 'none',
    backgroundColor: '#1A1E26',
  },
  '& .MuiSlider-thumb': {
    height: 10,
    width: 10,
    backgroundColor: '#FFFFFF',
    border: '2px solid #1A1E26',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    display: "none",
  },
});

const PriceSlider = (props) => {

  const minDistance = 5;
  
  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      props.choosePriceRangeUI(
        [Math.min(newValue[0], props.priceRangeUI[1] - minDistance), props.priceRangeUI[1]]
      );
    } else {
      props.choosePriceRangeUI(
        [props.priceRangeUI[0], Math.max(newValue[1], props.priceRangeUI[0] + minDistance)]
      );
    }

    props.choosePriceRangeUI(newValue[0], newValue[1])
  }

    return (
      <CustomSlider
        value={props.priceRangeUI}
        onChange={handleChange}
        valueLabelDisplay='auto'
        max={100}
      />
    );
  }

  export default PriceSlider;