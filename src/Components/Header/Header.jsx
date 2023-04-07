import React from 'react';
import './header.css'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
       <nav>
        <Link to={'/'}>home</Link>
        <Link to={'review'}>Order review</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/contact'}>Contact</Link>
       </nav>
    );
};

export default Header;