import React from "react";
import UsersChart from "../charts/UsersChart";

const UserStatistic = () => {
  return (
    <div className="userstatistic">
      <div className="userstatistic-header">
        <div className="userstatistic-header-text">
          Users statistic
        </div>
        {/* <div className="userstatistic-header-buttons">
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
      <UsersChart />
    </div>
  )
}

export default UserStatistic;