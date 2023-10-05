import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EditPromo from "../components/common/EditPromo";
import { useSelector, useDispatch } from "react-redux";
import { loadPromocodeInfo, editPromocode } from "../../store/adminSlice";
import { 
  openSuccessSnackbar, 
  openErrorSnackbar, 
  openAdminModal, 
  closeAdminModal } from "../../store/modalSlice";
import '../styles/pages/promoeditpage.scss';

const PromoEditPage = () => {

  const dispatch = useDispatch();
  const promocodeInfo = useSelector(state => state.admin.promocodeInfo);

  const {promo} = useParams();

  const [promocode, setPromocode] = useState(null);
  const [percentDiscount, setPercentDiscount] = useState(null);
  const [expirationDate, setExpirationDate] = useState(null);

  useEffect(() => {
    dispatch(loadPromocodeInfo(promo))
  }, [])

  const editPromocodeInfo = () => {
    dispatch(editPromocode({
      id: promocodeInfo.id,
      promocode: promocode,
      percentDiscount: percentDiscount,
      expirationDate: expirationDate,
    }))
    .then(data => {
      if (data.type === 'admin/editPromocode/fulfilled') {
        dispatch(openSuccessSnackbar('Promocode edited successfully'))
        dispatch(closeAdminModal())
      }
      if (data.type === 'admin/editPromocode/rejected') {
        dispatch(openErrorSnackbar(data.error.message))
        dispatch(closeAdminModal())
      }
    })
  }

  const onClickEdit = () => {
    dispatch(openAdminModal({text: `Edit promocode ${promocode}`, callback: editPromocodeInfo}))
  }
  
  return (
    <div className="promoeditpage">
      <div className="page-header">
        <h2>Edit promocode</h2>
      </div>
      <div className="page-main-content">
        <div className="editpromo-wrapper">
          { 
            promocodeInfo &&
            <EditPromo 
              setPromocode={setPromocode}
              setPercentDiscount={setPercentDiscount}
              setExpirationDate={setExpirationDate}
            />
          }
        </div>
        <div className="edit-promo-wrapper">
          <button 
            className="edit-promo-button"
            onClick={onClickEdit}
          >
            Edit promocode
          </button>
        </div>
      </div>
    </div>
  )
}

export default PromoEditPage;