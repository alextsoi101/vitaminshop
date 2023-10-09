import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBarModal from '../components/modal/NavBarModal';
import Search from '../components/common/Search';
import LoginToggle from '../components/common/LoginToggle';
import OpenCartModal from '../components/common/OpenCartModal.jsx';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import logo from '../assets/images/logo.png';
import { useSelector } from 'react-redux';

const Header = () => {

  const navigate = useNavigate();
  const isLogin = useSelector(state => state.user.isLogin);

  const [isNavBarModalOpen, setIsNavBarModalOpen] = useState(false);

  const openNavBarModal = () => {
    setIsNavBarModalOpen(true)
  }
  const closeNavBarModal = () => {
    setIsNavBarModalOpen(false)
  }
  const handleClickLogo = () => {
    navigate('/')
  }

  return (
    <>
      <header>
        <div className="header-content">
          <div className="logo-wrapper">
            <button 
              className="navmobile-btn"
              onClick={openNavBarModal}
            >
              <MenuOutlinedIcon 
                sx={{fontSize: '30px'}}
              />
            </button>
            <img 
              className="header-logo"
              src={logo} 
              alt="logo"
              onClick={handleClickLogo}
            />
          </div>
          <div className="search-wrapper">
            <Search />
          </div>
          <div className="logintoggle-cart">
            <LoginToggle />
            <div className="cartbtn-wrapper">
              <OpenCartModal />
            </div>
          </div>
        </div>
        <div className="search-section-mobile">
          <div className="search-wrapper-mobile">
            <Search />
          </div>
        </div>
      </header>

      <NavBarModal 
        isNavBarModalOpen={isNavBarModalOpen}
        closeNavBarModal={closeNavBarModal}
      />
    </>
  )
}

export default Header;
