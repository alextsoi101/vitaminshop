import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { MenuItem, Select, InputBase } from '@mui/material';

const StyledInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: 5,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '5px 26px 5px 12px',
  }
}));

const SelectSortBy = (props) => {
  const [sortType, setSortType] = useState(props.defaultSort || 'Sort By');
  const handleChange = (event) => {
    setSortType(event.target.value);
  };

  return (
    <Select
      displayEmpty
      value={sortType}
      onChange={handleChange}
      input={<StyledInput />}
      renderValue={(selected) => {
        return selected;
      }}
      style={{ width: "100%", height: 'auto'}}
    >
      <MenuItem 
        value="Sort By"
        onClick={() => props.selectSortBy('default')}
      >
        Sort By
      </MenuItem>
      <MenuItem 
        value="Newest"
        onClick={() => props.selectSortBy('newest')}
      >
        Newest
      </MenuItem>
      <MenuItem 
        value="Rating"
        onClick={() => props.selectSortBy('rating')}
      >
        Rating
      </MenuItem>
      <MenuItem 
        value="Low price"
        onClick={() => props.selectSortBy('pricelow')}
      >
        Low price
      </MenuItem>
      <MenuItem 
        value="High price"
        onClick={() => props.selectSortBy('pricehigh')}
      >
        High price
      </MenuItem>
    </Select>
  );
}

export default SelectSortBy;
