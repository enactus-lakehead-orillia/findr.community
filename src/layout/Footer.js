import React from "react";
import {Link } from "react-router-dom";
import logo from "../assets/images/findr-logo.png";
import SearchBar from "./SearchBar";
import { StyleSheet } from "react-native";

const Footer = () => {
    return (
        <>
            <div style={styles.links}>
               <Link>Privacy Policy</Link>
               <Link>About</Link>
               <Link>iOS App</Link>
               <Link>Android App</Link>
            </div>
            <div style={styles.links}>
                <p>© FinDr 2024</p>
            </div>
         </>
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
    links: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around"
    },
});

export default Footer;
