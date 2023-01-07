import { View, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import SearchIconSVG from '@/assets/icons/search-sharp.svg';
import { theme } from "@/App";

const Search = ({ props }) => {



  return (
    <View>
      {/* Search Bar */}

      <TouchableOpacity rippleColor="rgba(120, 0, 0, .32)"
        onPress={() => {
          props.navigation.navigate("SearchScreen");
        }}
      >

        <View
          pointerEvents="none"
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#e5e5e5",
            paddingHorizontal: 10,
            borderRadius: 12,
            marginTop: 15,
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "#d7d7d7",
          }}
        >
          <SearchIconSVG width={24} height={24} fill="#454545" />
          <TextInput
            placeholder="Search property"
            placeholderTextColor='rgba(0, 0, 0, 0.42)'
            style={{
              marginHorizontal: 10,
              fontSize: 16,
              paddingRight: 10,
              flex: 1,
              fontWeight: '800',
              color: theme.colors.textDark
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Search;
