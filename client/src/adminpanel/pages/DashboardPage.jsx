import React from "react";
import SaleStatistic from "../components/common/SaleStatistic";
import UserStatistic from "../components/common/UserStatistic";
import LifeTimeStatistic from "../components/common/LifeTimeStatistic";
import '../styles/pages/dashboardpage.scss';

const DashboardPage = () => {
  return (
    <div className="dashboardpage">
      <div className="page-header">
        <h2>Dashboard</h2>
      </div>
      <div className="page-main-content">
        <div className="content-statistics-lifetime">
          <div className="sale-user-statistic-wrapper">
            <SaleStatistic />
            <UserStatistic />
          </div>
          <div className="lifetime-statistic-wrapper">
            <LifeTimeStatistic />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage;