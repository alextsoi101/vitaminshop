import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import OrderItems from "../components/common/OrderItems";
import OrderTotal from "../components/common/OrderTotal";
import OrderUserInfo from "../components/common/OrderUserInfo";
import { useSelector, useDispatch } from "react-redux";
import { loadOrderInfo } from "../../store/adminSlice";
import '../styles/pages/orderinfopage.scss';

const OrderInfoPage = () => {

  const dispatch = useDispatch();
  const orderInfo = useSelector(state => state.admin.orderInfo);

  const {id} = useParams();

  useEffect(() => {
    dispatch(loadOrderInfo(id))
  }, [])

  return (
    <div className="orderinfopage">
      <div className="page-header">
        <h2>Order info</h2> <span>#{id}</span>
      </div>
      <div className="page-main-content">
        <div className="order-content-wrapper">
          <div className="content-leftside-wrapper">
            <div>
              {
                orderInfo &&
                <OrderItems 
                  orderItems={orderInfo.orderedProducts}
                />
              }
            </div>
            <div>
              {
                orderInfo &&
                <OrderTotal 
                  total={orderInfo.total}
                  shippingCost={orderInfo.shippingCost}
                />
              }
            </div>
          </div>
          <div className="content-rightside-wrapper">
              {
                orderInfo &&
                <OrderUserInfo 
                  userId={orderInfo.userId}
                  firstName={orderInfo.firstName}
                  lastName={orderInfo.lastName}
                  email={orderInfo.email}
                  phone={orderInfo.userId}
                  city={orderInfo.city}
                  state={orderInfo.state}
                  country={orderInfo.country}
                  zip={orderInfo.zip}
                  addressLineOne={orderInfo.addressLineOne}
                  addressLineTwo={orderInfo.addressLineTwo}
                  notes={orderInfo.notes}
                />
              }
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderInfoPage;