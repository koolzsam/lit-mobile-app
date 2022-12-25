import { View, TextInput } from "react-native";
import React from "react";
import SearchIconSVG from '@/assets/icons/search-sharp.svg';

const Search = () => {
  return (
    <View>
      {/* Search Bar */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#e5e5e5",
          padding: 10,
          borderRadius: 15,
          marginTop: 15,
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: "#d7d7d7",
        }}
      >
        <SearchIconSVG width={24} height={24} fill="#454545"/>
        <TextInput
          placeholder="Search property"
          style={{
            marginHorizontal: 10,
            fontSize: 16,
            paddingRight: 10,
            flex: 1,
          }}
        />
      </View>
    </View>
  );
};

export default Search;
