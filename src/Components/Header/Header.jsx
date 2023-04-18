import React from 'react';
import './Header.css';5
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='nav'>
                <div >
                   <img src={logo} alt="" /> 
                </div>
                <div>
                    <Link to="/">shop</Link>
                    <Link to="/Order">Order</Link>
                    <Link to="/Inventory">Manage Inventory</Link>
                    <Link to="/Login">Login</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;