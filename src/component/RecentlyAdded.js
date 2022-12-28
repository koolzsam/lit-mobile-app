import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import INRSignSolidSVG from '@/assets/icons/inr-sign-solid.svg';
import { useRecentlyAddedProperties } from "@/api";

const RecentlyAdded = ({ props }) => {
  const { data, isLoading } = useRecentlyAddedProperties();
  return (
    <View style={{ marginTop: 20, marginBottom: 10 }}>
      {/* Tile Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "800" }}>
          Recently added properties
        </Text>
        <TouchableOpacity>
          <Text style={{ color: "#025A63", fontWeight: "800" }}>See All</Text>
        </TouchableOpacity>
      </View>

      {/* Properties data tiles */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          { isLoading && (<Text style={{ color: "#025A63", fontWeight: "800" }}>Fetching...</Text>) }
          { !isLoading && data.map((item) => {
            return (
              <View
                key={item.id}
                style={{
                  marginRight: 10,
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("Home", { screen : "PropertyDetailsScreen"});
                  }}
                >
                  <Image
                    source={item.image}
                    resizeMode="cover"
                    style={{
                      width: 187,
                      height: 110,
                      borderRadius: 10,
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
                      <INRSignSolidSVG width={16} height={16} fill="black"/>
                      <Text
                        style={{
                          color: "#000",
                          fontWeight: "800",
                          fontSize: 16,
                          marginLeft: 4,
                        }}
                      >
                        {item.price}/
                      </Text>
                      <Text
                        style={{
                          color: "#000",
                          fontSize: 16,
                        }}
                      >
                        Month
                      </Text>
                    </View>
                    <View style={{ marginTop: 6 }}>
                      <Text
                        style={{
                          color: "#000",
                          fontSize: 16,
                        }}
                      >
                        {item.caption}
                      </Text>
                      <Text
                        style={{
                          color: "#000",
                          fontSize: 16,
                        }}
                      >
                        {item.size}
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
