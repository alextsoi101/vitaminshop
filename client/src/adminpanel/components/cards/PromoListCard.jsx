import React from "react";
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';

const PromoListCard = (props) => {

  const navigate = useNavigate();

  const goToEditPromo = () => {
    navigate(`edit/${props.promocode}`)
  }

  return (
    <tr className="promolistcard">
      <td>
        <div className="td-content td-id">
          <button 
            className="link-button"
            onClick={goToEditPromo}
          >
            #{props.id}
          </button>
        </div>
      </td>
      <td>
        <div className="td-content td-promocode">
          <button 
            className="link-button"
            onClick={goToEditPromo}
          >
            {props.promocode}
          </button>
        </div>
      </td>
      <td>
        <div className="td-content td-discount">
          <span>{props.percentDiscount}</span>%
        </div>
      </td>
      <td>
        <div className="td-content td-expiration">
          {props.expirationDate}
        </div>
      </td>
      <td>
        <div className="td-content td-edit">
          <button 
            className="delete-product-btn"
            onClick={goToEditPromo}
          >
            <EditIcon 
              sx={{fontSize: "20px"}}
            />
          </button>
        </div>
      </td>
    </tr>
  )
}

export default PromoListCard;