import { TextInput, View } from 'react-native'
import React from 'react'
import SearchIconSVG from '@/assets/icons/search-sharp.svg';
import { theme } from "@/App";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  console.log(searchQuery)
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#eeeeee",
          paddingVertical: 8,
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
          placeholder="Enter City/Landmark/locality...."
          placeholderTextColor='rgba(0, 0, 0, 0.42)'
          onChangeText={onChangeSearch}
          value={searchQuery}
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
    </View>
  )
}

export default SearchInput