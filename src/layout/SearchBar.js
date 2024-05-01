import React, { useEffect, useState } from 'react';
import {TextInput, TouchableOpacity} from "react-native";
import {CiSearch} from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const clearSearch = () => {
        setSearchQuery("");
      };

return(
    <div className="search-selection">
        <CiSearch/>
        <TextInput 
        /** Input does not change when I try to modify the styling ***/
            className = "input" 
            placeholder="Search Communities and Events"
            placeholderTextColor= "#000000"
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
        />
        {searchQuery.length > 0 && (
            <TouchableOpacity onPress={clearSearch}>
                <IoMdClose/>
            </TouchableOpacity>
        )}
    </div>
);
}

export default SearchBar;