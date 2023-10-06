import React from "react";
import SalesChart from "../charts/SalesChart";

const SaleStatistic = () => {
  return (
    <div className="salestatistic">
      <div className="salestatistic-header">
        <div className="salestatistic-header-text">
          Sale statistic
        </div>
        {/* <div className="salestatistic-header-buttons">
          <button 
            className="range-btn"
          >
            Daily
          </button>
          <button 
            className="range-btn"
          >
            Weekly
          </button>
          <button 
            className="range-btn"
          >
            Monthly
          </button>
        </div> */}
      </div>
      <SalesChart />
    </div>
  )
}

export default SaleStatistic;