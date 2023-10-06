import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { calculatePageCount } from "../../utils/calculatePageCount";
import PromoList from "../components/common/PromoLIst";
import { useSelector, useDispatch } from "react-redux";
import { loadPromocodes } from "../../store/adminSlice";
import '../styles/pages/promolistpage.scss';

const PromoListPage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const promocodes = useSelector(state => state.admin.promocodes);

  const [page, setPage] = useState(null);
  const [limit, setLimit] = useState(10);
  const [pageCount, setPageCount] = useState(null);

  useEffect(() => {
    dispatch(loadPromocodes({
      limit: limit,
      page: page,
    }))
  }, [])

  useEffect(() => {
    if (promocodes) {
      setPageCount(calculatePageCount(promocodes.count, limit))
    }
  }, [promocodes])

  const changeLimit = (newLimit) => {
    dispatch(loadPromocodes({
      limit: newLimit,
      page: 1,
    }))
  }

  const changePage = (newPage) => {
    dispatch(loadPromocodes({
      limit: limit,
      page: newPage,
    }))
  }

  const goToCreatePromo = () => {
    navigate(`new`)
  }

  return (
    <div className="promolistpage">
      <div className="page-header">
        <h2>Promocodes</h2>
        <div className="header-button-section">
          <button 
            className="newpromo-button"
            onClick={goToCreatePromo}
          >
            New Promocode
          </button>
        </div>
      </div>
      <div className="page-main-content">
        <div className="promo-list-wrapper">
          {
            promocodes &&
            <PromoList
              promocodes={promocodes}
              setPage={setPage}
              setLimit={setLimit}
              pageCount={pageCount}
              changeLimit={changeLimit}
              changePage={changePage}
            />
          }
        </div>
      </div>
    </div>
  )
}

export default PromoListPage;