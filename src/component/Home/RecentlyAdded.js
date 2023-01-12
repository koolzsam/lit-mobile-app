import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import INRSignSolidSVG from '@/assets/icons/inr-sign-solid.svg';
import { useRecentlyAddedProperties } from "@/api";
import { theme } from "@/core/theme";

const RecentlyAdded = ({ props }) => {
  const { data, isLoading } = useRecentlyAddedProperties();
  return (
    <View style={{ marginTop: 20, marginBottom: 20 }}>
      {/* Tile Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >

        <Text style={{ fontSize: 20, fontWeight: "600", color: theme.colors.textDark }}>
          Recently added properties
        </Text>

        <TouchableOpacity>
          <Text style={{ color: "#025A63", fontWeight: "800" }}>See All</Text>
        </TouchableOpacity>
      </View>

      {/* Properties data tiles */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          {isLoading && (<Text style={{ color: "#025A63", fontWeight: "800" }}>Fetching...</Text>)}
          {!isLoading && data.map((item) => {
            return (
              <View
                key={item.id}
                style={{
                  marginRight: 10,
                  width: 160,
                }}
              >
                <TouchableOpacity rippleColor="rgba(120, 0, 0, .32)"
                  onPress={() => {
                    props.navigation.navigate("Home", { screen: "DetailsScreen" });
                  }}
                >
                  <Image
                    source={item.image}
                    resizeMode="cover"
                    style={{
                      width: '100%',
                      height: 100,
                      borderRadius: 6,
                      justifyContent: "flex-end",
                    }}
                  />
                  <View
                    style={{
                      marginTop: 5,
                    }}
                  >
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <INRSignSolidSVG width={14} height={14} fill="black" />
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
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default RecentlyAdded;
