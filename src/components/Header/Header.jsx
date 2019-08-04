//@flow
import React from 'react';
import { Link } from "react-router-dom";
//$FlowFixMe
import './header.css';

const Header = () => (
    <header className="header">
        <Link to="/" className="header__element">
            <span className="header__element-default">Marianna</span>
            <span className="header__element-active">Home</span>
        </Link>
        <Link to="/about" className="header__element">
            <span className="header__element-default">Serocka</span>
            <span className="header__element-active">More about</span>
        </Link>
    </header>
)

export default Header;