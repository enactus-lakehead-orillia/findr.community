import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/findr-logo.png";
import SearchBar from "./SearchBar";
import { StyleSheet } from "react-native";

const CommunityCard = ({communityName, desc, topics, image}) => {
    return (
    <>
    <div className="card">
        <img className = "cardImage"src= {image} alt = {communityName}/>
        <div className="gray-background">
            <h2>{communityName}</h2>
            <p>{desc}</p>
            <div className="topics">
                <p className="space">Topics:</p>
                <li>{topics.join(", ")}</li>
            </div>
        </div>
    </div>
    </>
    );
};

export default CommunityCard;