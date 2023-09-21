import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const ProductListCard = (props) => {
  return (
    <tr className="productlistcard">
      <td>
        <div className="td-content td-id">
          #232
        </div>
      </td>
      <td>
        <div className="td-content td-image">
          <div className="image-wrapper">
            <img src="https://demo.evershop.io/assets/catalog/2887/1596/plv2996-Purple-thumb.png" alt="" />
          </div>
        </div>
      </td>
      <td>
        <div className="td-content td-productname">
          <div className="td-productname-text">
            Test vitamin name 23
          </div>
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