import React from "react";
import AdminPanelInput from "../UI/AdminPanelInput";
import AdminPanelDateInput from "../UI/AdminPanelDateInput";

const EditPromo = (props) => {

  return (
    <div className="editpromo">
      <div className="editpromo-header">
        Edit Promocode Info
      </div>
      <div className="promo-code">
        <AdminPanelInput 
          label='Promo Code'
          placeholder='Promo code...'
        />
      </div>
      <div className="promo-percent">
        <AdminPanelInput 
          label='Percent Discount'
          suffix='%'
          placeholder='Percent discount...'
        />
      </div>
      <div className="promo-expiration">
        <AdminPanelDateInput 
          label='Expiration Date'
          // defaultValue={defaultValue}
        />
      </div>
    </div>
  )
}

export default EditPromo;