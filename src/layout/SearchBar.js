import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const clearSearch = () => {
        setSearchQuery("");
    };

    return (
        <div className="search-selection"> {/* <- CSS works on this element though */}
            <TextInput
                style={styles.input}
                placeholder="Search Communities and Events"
                placeholderTextColor="#000000"
                value={searchQuery}
                onChangeText={(text) => setSearchQuery(text)}
            />
            {searchQuery.length > 0 && (
                <TouchableOpacity onPress={clearSearch}>
                    <IoMdClose className='lol'/>
                </TouchableOpacity>
            )}
        </div>
    );
}
const styles = StyleSheet.create({
    input: {
    height: 40,
    width: 250,
    shadowColor: "#707070",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.9,
    borderRadius: 25,
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 14,
    paddingRight: 35,
    borderColor: "#1f0000",
    backgroundColor: "#F8F8F8",
    },
    
  });
  

export default SearchBar;