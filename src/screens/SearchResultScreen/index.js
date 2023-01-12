import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { styles } from '../SearchScreen';

import INRSignSolidSVG from '@/assets/icons/inr-sign-solid.svg';
import { useSearchResult } from '@/api/properties/use-search-result';
import { theme } from '@/core/theme';

// Icon
import BackArrowIcon from '@/assets/icons/back-arrow-icon.svg';


export const SearchResultScreen = ({ navigation }) => {
  const { data, isLoading } = useSearchResult();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => { navigation.goBack() }}>
          <View>
            <Text style={{ color: theme.colors.textDark }}><BackArrowIcon width={28} height={28} color="#3C68D9" /></Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Results */}
      <ScrollView>
        <View style={{ padding: 20 }}>
          <View>
            <Text style={{ color: theme.colors.textDark }} className="text-base font-bold">27 search result found</Text>
          </View>

          <View style={{ flexDirection: "row", flexWrap: 'wrap', marginTop: 10, marginHorizontal: -10, }}>
            {isLoading && (<Text style={{ color: "#025A63", fontWeight: "800" }}>Fetching...</Text>)}
            {!isLoading && data.map((item) => {
              return (
                <View
                  key={item.id}
                  style={{

                    width: '50%',
                  }}
                >
                  <View
                    style={{
                      marginTop: 20,
                      paddingHorizontal: 10
                    }}>

                    <TouchableOpacity rippleColor="rgba(120, 0, 0, .32)"
                      onPress={() => {
                        navigation.navigate("Home", { screen: "DetailsScreen" });
                      }}
                    >
                      <Image
                        source={item.image}
                        resizeMode="cover"
                        style={{
                          width: '100%',
                          height: 110,
                          borderRadius: 10,
                          justifyContent: "flex-end",
                        }}
                      />
                      <View
                        style={{
                          marginTop: 10,
                        }}
                      >
                        <View
                          style={{ flexDirection: "row", alignItems: "center" }}
                        >
                          <INRSignSolidSVG width={13} height={13} fill="black" />
                          <Text
                            style={{
                              color: "#000",
                              fontWeight: "800",
                              fontSize: 14,
                              marginLeft: 4,
                            }}
                          >
                            {item.price}/
                          </Text>
                          <Text
                            style={{
                              color: "#000",
                              fontSize: 14,
                            }}
                          >
                            Month
                          </Text>
                        </View>

                        <View style={{ marginTop: 6 }}>
                          <Text
                            style={{
                              color: "#000",
                              fontSize: 14,
                            }}
                          >
                            {item.caption}
                          </Text>
                          <Text
                            style={{
                              color: "#000",
                              fontSize: 14,
                            }}
                          >
                            {item.size}
                          </Text>
                          <Text
                            style={{
                              color: "#000",
                              fontSize: 14,
                            }}
                          >
                            {item.location}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

