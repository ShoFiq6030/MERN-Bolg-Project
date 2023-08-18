import React from "react";
import { NavLink } from "react-router-dom";
import "./menu.css";

const Menu = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink to={"/"} className="nav-link mx-5">
        Blogs
      </NavLink>
      <NavLink to={"/create"} className="nav-link">
        Create Blog
      </NavLink>

    
    </div>
  );
};

export default Menu;
