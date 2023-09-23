import React from "react";
import EditPromo from "../components/common/EditPromo";
import '../styles/pages/promoeditpage.scss';

const PromoEditPage = () => {
  return (
    <div className="promoeditpage">
      <div className="page-header">
        <h2>Edit promocode</h2>
      </div>
      <div className="page-main-content">
        <div className="editpromo-wrapper">
          <EditPromo />
        </div>
        <div className="editpromo-wrapper">
          <button className="edit-promo-button">
            Edit promocode
          </button>
        </div>
      </div>
    </div>
  )
}

export default PromoEditPage;