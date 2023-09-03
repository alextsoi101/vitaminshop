import React from "react";
import { useNavigate } from 'react-router-dom';
import NavlinkMobile from "../UI/NavlinkMobile";
import NavDropdownMobile from "../UI/NavDropDownMobile";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSelector, useDispatch } from 'react-redux';
import { userLogout } from '../../store/userSlice';

const NavBarMobile = ({closeNavBarModal}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector(state => state.user.isLogin);

  const handleClickMyAccount = () => {
    navigate('/myaccount')
    closeNavBarModal()
  }
  const handleClickMyCart = () => {
    navigate('/cart')
    closeNavBarModal()
  }
  const handleLogout = () => {
    dispatch(userLogout())
    closeNavBarModal()
  }

  return (
    <div className="navbarmobile-wrapper">

      <button 
        className="closebtn"
        onClick={closeNavBarModal}
      >
        <CloseRoundedIcon 
          sx={{fontSize: '27px'}}
        />
      </button>

      <div className="navbarmobile">
        <ul className="nav-mobile">
          <NavlinkMobile 
            value='Home' 
            link='/'
            closeNavBarModal={closeNavBarModal}
          />
          <NavlinkMobile 
            value='Shop All' 
            link='/shop'
            closeNavBarModal={closeNavBarModal}
          />
          <NavDropdownMobile
            title='Categories' 
            items={[
              {text: 'Men health', link: '/shop?category_id=1'},
              {text: 'Women health', link: '/shop?category_id=2'}, 
              {text: 'Kids', link: '/shop?category_id=3'},
              {text: 'Omega', link: '/shop?category_id=9'}
            ]}
            closeNavBarModal={closeNavBarModal}
          />
          <NavlinkMobile 
            value='Best Offers' 
            link='/shop?order=rating'
            closeNavBarModal={closeNavBarModal}
          />
          <NavlinkMobile 
            value='For Men' 
            link='/shop?category_id=1'
            closeNavBarModal={closeNavBarModal}
          />
          <NavlinkMobile 
            value='For Women' 
            link='/shop?category_id=2'
            closeNavBarModal={closeNavBarModal}
          />
          <NavlinkMobile 
            value='Kids' 
            link='/shop?category_id=3'
            closeNavBarModal={closeNavBarModal}
          />
          <NavDropdownMobile
            title='Vitamins'
            items={[
              {text: 'Vitamin A', link: '/shop?category_id=5'},
              {text: 'Vitamin B', link: '/shop?category_id=6'}, 
              {text: 'Vitamin C', link: '/shop?category_id=7'},
              {text: 'Vitamin D', link: '/shop?category_id=8'}
            ]}
            closeNavBarModal={closeNavBarModal}
          />
          <NavlinkMobile 
            value='Omega' 
            link='/shop?category_id=9'
            closeNavBarModal={closeNavBarModal}
          />
        </ul>
            <div className="navbarmobile-browse">
              <div className="text-browse">BROWSE</div>
              <ul className="browse-menu">
                <li
                  className="browse-menu-item"
                  onClick={handleClickMyCart}
                >
                  <ShoppingCartOutlinedIcon sx={{fontSize: '14px'}} /> <span>My Cart</span>
                </li>
                { isLogin &&
                  <>
                    <li 
                      className="browse-menu-item"
                      onClick={handleClickMyAccount}
                    >
                      <ManageAccountsIcon sx={{fontSize: '14px'}} /> <span>My Account</span>
                    </li>
                    <li 
                      className="browse-menu-item logout-item"
                      onClick={handleLogout}
                    >
                      <LogoutIcon sx={{fontSize: '14px'}} /> <span>Logout</span>
                    </li>
                  </>
                }
              </ul>
            </div>
        </div>
    </div>
  )
}

export default NavBarMobile;