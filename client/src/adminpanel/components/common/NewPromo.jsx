import React from "react";
import AdminPanelInput from "../UI/AdminPanelInput";
import AdminPanelDateInput from "../UI/AdminPanelDateInput";

const NewPromo = (props) => {

  const date = new Date();
  const futureDate = date.getDate() + 3;
  date.setDate(futureDate);
  const defaultValue = date.toLocaleDateString('en-CA');

  return (
    <div className="newpromo">
      <div className="newpromo-header">
        Promocode Info
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
          defaultValue={defaultValue}
        />
      </div>
    </div>
  )
}

export default NewPromo;