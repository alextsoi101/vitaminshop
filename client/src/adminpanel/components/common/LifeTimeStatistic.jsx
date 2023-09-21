import React from "react";
import OrdersPieChart from "../charts/OrdersPieChart";
import BarChartIcon from '@mui/icons-material/BarChart';
import CircleIcon from '@mui/icons-material/Circle';

const LifeTimeStatistic = () => {

  return (
    <div className="lifetimestatistic">
      <div className="lifetime-info">
        <div className="lifetime-sales-text">
          Lifetime Sales
        </div>
        <ul className="info-list">
          <li className="info-list-item">
            <div className="icon-wrapper">
              <BarChartIcon fontSize="small" /> 
            </div> 
            <span>1280 orders</span>
          </li>
          <li className="info-list-item">
            <div className="icon-wrapper">
              <BarChartIcon fontSize="small" /> 
            </div> 
            <span>$298021 total sale</span>
          </li>
          <li className="info-list-item">
            <div className="icon-wrapper-chart-login">
              <CircleIcon fontSize="small" /> 
            </div> 
            <span>56 orders (user authorized)</span>
          </li>
          <li className="info-list-item">
            <div className="icon-wrapper-chart-anonim">
              <CircleIcon fontSize="small" /> 
            </div> 
            <span>44 orders (user non-authorized)</span>
          </li>
        </ul>
      </div>
      <div className="lifetime-orders-chart">
        <OrdersPieChart />
      </div>
    </div>
  )
}

export default LifeTimeStatistic;