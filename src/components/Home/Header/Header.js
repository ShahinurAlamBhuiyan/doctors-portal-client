import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../../Shared/Navbar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <Navbar/>
            <HeaderMain/>
        </div>
    );
};

export default Header;