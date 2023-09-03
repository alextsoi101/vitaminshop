import React from 'react';
import { Pagination, Stack } from '@mui/material/';

const PagePagination = (props) => {
  return (
    <Stack spacing={1}>
      <Pagination 
        count={props.totalPages}
        page={props.page} 
        onChange={props.handleChange}
      />
    </Stack>
  )
}

export default PagePagination;