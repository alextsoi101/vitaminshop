import React from 'react';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';

const ProductListCard = (props) => {

  const navigate = useNavigate();

  const goToProductEditPage = () => {
    navigate(`edit/${props.id}`)
  }

  return (
    <tr className="productlistcard">
      <td>
        <div className="td-content td-id">
          <button 
            className="link-button"
            onClick={goToProductEditPage}
          >
            #{props.id}
          </button>
        </div>
      </td>
      <td>
        <div className="td-content td-image">
          <div className="image-wrapper">
            <img src={props.image} alt="productimg" />
          </div>
        </div>
      </td>
      <td>
        <div className="td-content td-productname">
          <button 
            className="link-button"
            onClick={goToProductEditPage}
          >
            {props.name}
          </button>
        </div>
      </td>
      <td>
        <div className="td-content td-price">
          $<span>{props.price}</span>.00
        </div>
      </td>
      <td>
        <div className="td-content td-category">
          {
            props.categories.map(category => <span key={category.id}>{category.name}</span>)
          }
        </div>
      </td>
      <td>
        <div className="td-content td-status">
          {props.inStock ? 
            <span className="instock-true">In stock</span>
            :
            <span className="instock-false">Out Of stock</span>
          }
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