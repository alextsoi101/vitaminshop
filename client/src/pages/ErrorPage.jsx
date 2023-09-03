import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/pages/errorpage.scss';

const ErrorPage = () => {

  const navigate = useNavigate();

  return (
    <div className="errorpage">
      <h1>404</h1>
      <h2>Page doesn't exists</h2>
      <div className="errorinfo">
        The page you are looking for doesn't exist <br/>
        or an other error occured.
      </div>
      <div 
        className="text-continueshopping"
        onClick={() => navigate('/shop')}
      >
        Continue shopping
      </div>
    </div>
  )
}

export default ErrorPage;