import React from "react";
import {NavLink} from "react-router-dom";
import "./style.scss";

export default  function Navbar() {
    return (
        <nav className="nav">
            <div className="nav__ul--left">
                <ul className="nav__ul--left__items">
                    <NavLink to="/">Portfolio Builder</NavLink>
                </ul>
            </div>
            <div className="nav__ul--right">
                <ul className="nav__ul--right__items">
                    <NavLink to="/admin">Admin</NavLink>
                </ul>
            </div>
        </nav>
    );
}
