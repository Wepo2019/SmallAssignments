import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
    return (
    <>
        <NavLink to='/'><img src="" alt="" id="logo"></img></NavLink>
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <NavLink  className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item active">
                <NavLink className="nav-link" to="/bosses">Bosses</NavLink>
            </li>
        </ul>
    </>
    )
};

export default NavLinks;