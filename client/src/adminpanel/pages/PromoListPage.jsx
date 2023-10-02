import React from "react";
import PromoList from "../components/common/PromoLIst";
import '../styles/pages/promolistpage.scss';

const PromoListPage = () => {
  return (
    <div className="promolistpage">
      <div className="page-header">
        <h2>Promocodes</h2>
        <div className="header-button-section">
          <button className="newpromo-button">
            New Promocode
          </button>
        </div>
      </div>
      <div className="page-main-content">
        <div className="promo-list-wrapper">
          <PromoList />
        </div>
      </div>
    </div>
  )
}

export default PromoListPage;