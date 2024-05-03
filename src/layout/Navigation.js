import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/findr-logo.png";
import SearchBar from "./SearchBar";
import { StyleSheet } from "react-native";

const Navigation = () => {
    return (
        <nav style={styles.navbar}>
            <div style={styles.links}>
                <NavLink to="/">
                    <img src={logo} alt="Logo" style={styles.logo} />
                </NavLink>
                <SearchBar />
            </div>
            <div style={styles.links}>
                <NavLink style={styles.link}>
                    Login
                </NavLink>
                <NavLink style={styles.link}>
                    Sign up
                </NavLink>
            </div>
        </nav>
    );
};

const styles = StyleSheet.create({
    navbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        backgroundColor: "#f2f2f2",
    },
    logo: {
        marginRight: "10px",
        width: "50px"
    },
    links: {
        display: "flex",
        alignItems: "center",
    },
    link: {
        marginLeft: "10px",
        textDecoration: "none",
        color: "#333",
    },
});

export default Navigation;