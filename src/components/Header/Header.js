import React from 'react';
import logo from '../../logo.jpg';
import './Header.css';


const Header = () => {
    return (
    <div className="Header-section">
         <img src={logo} alt="" />
            
        <nav className="navigation">
           <a href="/home">Home</a>
        </nav> 
    </div>
    );
};

export default Header;