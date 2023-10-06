import React, { useEffect, useState } from "react";
import Pagination from '@mui/material/Pagination';

const AdminPagination = (props) => {

  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(Number(props.pageCount))
  }, [props.pageCount])

  const handleChange = (event, value) => {
    if (count > 1) {
      props.onChange(value)
    }
  }

  return (
    <div className="adminpagination">
      {count > 0 &&
        <Pagination 
        size="medium"
        shape="rounded"
        variant="outlined"
        count={count}
        onChange={handleChange}
      />
      }
    </div>
  )
}

export default AdminPagination;