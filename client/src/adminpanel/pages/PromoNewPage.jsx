import React, { useState } from "react";
import NewPromo from "../components/common/NewPromo";
import { useDispatch } from "react-redux";
import { addNewPromocode } from "../../store/adminSlice";
import { 
  openSuccessSnackbar, 
  openErrorSnackbar, 
  openAdminModal, 
  closeAdminModal } from "../../store/modalSlice";
import '../styles/pages/promonewpage.scss';

const PromoNewPage = () => {

  const dispatch = useDispatch();

  const [promocode, setPromocode] = useState(null);
  const [percentDiscount, setPercentDiscount] = useState(null);
  const [expirationDate, setExpirationDate] = useState(null);

  const createNewPromocode = () => {
    console.log(expirationDate)
    dispatch(addNewPromocode({
      promocode: promocode,
      percentDiscount: percentDiscount,
      expirationDate: expirationDate,
    }))
    .then(data => {
      if (data.type === 'admin/addNewPromocode/fulfilled') {
        dispatch(openSuccessSnackbar('Promocode successfully created'))
        dispatch(closeAdminModal())
      }
      if (data.type === 'admin/addNewPromocode/rejected') {
        dispatch(openErrorSnackbar(data.error.message))
        dispatch(closeAdminModal())
      }
    })
  }

  const onClickCreate = () => {
    dispatch(openAdminModal({text: `Create promocode ${promocode}`, callback: createNewPromocode}))
  }

  return (
    <div className="promonewpage">
      <div className="page-header">
        <h2>New promocode</h2>
      </div>
      <div className="page-main-content">
        <div className="newpromo-wrapper">
          <NewPromo 
            setPromocode={setPromocode}
            setPercentDiscount={setPercentDiscount}
            setExpirationDate={setExpirationDate}
          />
        </div>
        <div className="newpromocreate-wrapper">
          <button 
            className="create-promo-button"
            onClick={onClickCreate}
          >
            Create promocode
          </button>
        </div>
      </div>
    </div>
  )
}

export default PromoNewPage;