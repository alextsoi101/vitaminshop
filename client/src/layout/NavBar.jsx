import React from 'react';
import Navlink from '../components/UI/Navlink.jsx';
import NavDropdown from '../components/UI/NavDropdown.jsx';
import OpenCartModal from '../components/common/OpenCartModal.jsx';

const NavBar = () => {
  return (
    <div className="navbar">
      <ul className="nav">
        <Navlink 
          value='Home' 
          link='/'
        />
        <Navlink
          value='Shop All' 
          link='/shop'
        />
        <NavDropdown
          title='Categories' 
          items={[
            {text: 'Men health', link: '/shop?category_id=1'},
            {text: 'Women health', link: '/shop?category_id=2'}, 
            {text: 'Kids', link: '/shop?category_id=3'},
            {text: 'Omega', link: '/shop?category_id=9'}
          ]} 
        />
        <Navlink 
          value='Best offers' 
          link='/shop?order=rating'
        />
        <Navlink 
          value='For men' 
          link='/shop?category_id=1'
        />
        <Navlink 
          value='For women' 
          link='/shop?category_id=2'
        />
        <Navlink 
          value='Kids' 
          link='/shop?category_id=3'
        />
        <NavDropdown
          title='Vitamins'
          items={[
            {text: 'Vitamin A', link: '/shop?category_id=5'},
            {text: 'Vitamin B', link: '/shop?category_id=6'}, 
            {text: 'Vitamin C', link: '/shop?category_id=7'},
            {text: 'Vitamin D', link: '/shop?category_id=8'}
          ]}
        />
        <Navlink 
          value='Omega' 
          link='/shop?category_id=9'
        />
      </ul>

      <OpenCartModal />
    </div>
  )
}

export default NavBar;
