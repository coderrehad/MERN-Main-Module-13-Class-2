import React from 'react';
import {Link, NavLink} from "react-router-dom";

const AppNavbar = () => {
    return (
        <div>
            <ul className="menu">
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/docs">
                        Docs
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/blog">
                        Blog
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default AppNavbar;