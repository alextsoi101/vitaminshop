import React from "react";
import NewPromo from "../components/common/NewPromo";
import '../styles/pages/promonewpage.scss';

const PromoNewPage = () => {
  return (
    <div className="promonewpage">
      <div className="page-header">
        <h2>New promocode</h2>
      </div>
      <div className="page-main-content">
        <div className="newpromo-wrapper">
          <NewPromo />
        </div>
        <div className="newpromocreate-wrapper">
          <button className="create-promo-button">
            Create promocode
          </button>
        </div>
      </div>
    </div>
  )
}

export default PromoNewPage;