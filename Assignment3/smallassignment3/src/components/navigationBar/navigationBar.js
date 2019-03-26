import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';


const NavigationBar = () => {
    return (
        <nav className="navbar">
            <div>
                <NavLink to="/"><img src="../../Bubblify2.png" id="logo"></img></NavLink>
                <NavLink to="/" activeClassName="active" className="nav-link">Welcome page</NavLink>
                <NavLink to="/Bosses" activeClassName="active"className="nav-link">Bosses</NavLink>
            </div>
        </nav>
    )
};

export default NavLinks;
