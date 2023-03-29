import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='nav'>
                <div >
                   <img src="../../../images/Logo.svg" alt="" /> 
                </div>
                <div>
                    <a href="/Order">Order</a>
                    <a href="/Order Review">Order Review</a>
                    <a href="/Manage Inventory">Manage Inventory</a>
                    <a href="/Login">Login</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;