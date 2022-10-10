import React from "react";
import { NavLink } from "react-router-dom";

import avatar from "../images/logo.png";
export default function NavBar() {
  const year = new Date().getFullYear();
  return (
    <>
     <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img src={avatar} alt=""/>
                 </div>

                 <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/home" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/portfolios" exact activeClassName="active">
                            Portfolios
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/blogs" exact activeClassName="active">
                            Blogs
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>

                <footer className="footer">
                    <p>
                        @ copy right {year}
                    </p>
            </footer>
            </nav>
            
        </div>
    </>
  );
}
