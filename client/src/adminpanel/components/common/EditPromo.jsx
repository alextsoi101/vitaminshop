import React from "react";
import AdminPanelInput from "../UI/AdminPanelInput";
import AdminPanelDateInput from "../UI/AdminPanelDateInput";
import { useSelector } from "react-redux";

const EditPromo = (props) => {

  const promocodeInfo = useSelector(state => state.admin.promocodeInfo);

  const handlePromocodeInput = (value) => {
    props.setPromocode(value)
  }

  const handlePercentDiscountInput = (value) => {
    props.setPercentDiscount(value)
  }

  const handleExpirationDateInput = (value) => {
    props.setExpirationDate(value)
  }

  return (
    <div className="editpromo">
      <div className="editpromo-header">
        Edit Promocode Info
      </div>
      <div className="promo-code">
        <AdminPanelInput 
          label='Promo Code'
          placeholder='Promo code...'
          defaultValue={promocodeInfo.promocode}
          onChange={handlePromocodeInput}
        />
      </div>
      <div className="promo-percent">
        <AdminPanelInput 
          label='Percent Discount'
          suffix='%'
          placeholder='Percent discount...'
          defaultValue={promocodeInfo.percentDiscount}
          onChange={handlePercentDiscountInput}
        />
      </div>
      <div className="promo-expiration">
        <AdminPanelDateInput 
          label='Expiration Date'
          defaultValue={promocodeInfo.expirationDate}
          onChange={handleExpirationDateInput}
        />
      </div>
    </div>
  )
}

export default EditPromo;