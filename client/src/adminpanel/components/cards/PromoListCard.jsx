import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import defaultphoto from '../../../assets/images/user.png'

const PromoListCard = (props) => {
  return (
    <tr className="promolistcard">
      <td>
        <div className="td-content td-id">
          <button className="link-button">
            #232
          </button>
        </div>
      </td>
      <td>
        <div className="td-content td-promocode">
          <button className="link-button">
            testpromocode
          </button>
        </div>
      </td>
      <td>
        <div className="td-content td-discount">
          <span>30</span>%
        </div>
      </td>
      <td>
        <div className="td-content td-expiration">
          Sep 19, 2023
        </div>
      </td>
      <td>
        <div className="td-content td-edit">
          <button 
            className="delete-product-btn"
            // onClick={}
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