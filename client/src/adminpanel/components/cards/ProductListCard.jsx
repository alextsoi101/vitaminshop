import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const ProductListCard = (props) => {
  return (
    <tr className="productlistcard">
      <td>
        <div className="td-content td-id">
          <button className="link-button">
            #232
          </button>
        </div>
      </td>
      <td>
        <div className="td-content td-image">
          <div className="image-wrapper">
            <img src="" alt="" />
          </div>
        </div>
      </td>
      <td>
        <div className="td-content td-productname">
          <button className="link-button">
            Test vitamin name 23
          </button>
        </div>
      </td>
      <td>
        <div className="td-content td-price">
          $<span>23</span>.00
        </div>
      </td>
      <td>
        <div className="td-content td-category">
          Men, women, Multivitamin
        </div>
      </td>
      <td>
        <div className="td-content td-status">
          In stock
        </div>
      </td>
      <td>
        <div className="td-content td-remove">
          <button 
            className="delete-product-btn"
            // onClick={}
          >
            <DeleteIcon 
              sx={{fontSize: "20px"}}
            />
          </button>
        </div>
      </td>
    </tr>
  )
}

export default ProductListCard;