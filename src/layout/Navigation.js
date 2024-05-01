import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/findr-logo.png";
import SearchBar from "./SearchBar";

const Navigation = () => {
return(
    <div>
        <nav>
            <div className="container">
                <div className="nav-left">
                    <NavLink className= "logo">
                    <img src={logo} alt="Logo" />
                    </NavLink>
                    <SearchBar/>


                </div>

            </div>
        </nav>
    </div>
);
}

export default Navigation;