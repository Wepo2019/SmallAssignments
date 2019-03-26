import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
    return (
    <>
<<<<<<< HEAD
        <NavLink to='/'><img src="" alt="" id="logo"></img></NavLink>
=======
>>>>>>> 717f8a2e84954c1d4c8ff26c70f2d342d155630a
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <NavLink  className="nav-link" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/bosses">Bosses</NavLink>
            </li>
        </ul>
    </>
    )
};

export default NavLinks;
