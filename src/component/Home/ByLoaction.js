import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { usePropertyLocations } from "@/api";
import { theme } from "@/App";

const ByLocation = () => {
  const { data, isLoading } = usePropertyLocations();
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
        <Text style={{ fontSize: 20, fontWeight: "600", color: theme.colors.textDark }}>By locations</Text>
        <TouchableOpacity>
          <Text style={{ color: "#025A63", fontWeight: "800" }}>See All</Text>
        </TouchableOpacity>
      </View>

      {/* Properties data tiles */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          {isLoading && (<Text style={{ color: "#025A63", fontWeight: "800" }}>Fetching Properties...</Text>)}
          {!isLoading && data.map((item) => {
            return (
              <View
                key={item.id}
                style={{
                  marginRight: 10,
                  width: 160,
                }}
              >
                <TouchableOpacity>
                  <Image
                    source={item.image}
                    resizeMode="cover"
                    style={{
                      width: '100%',
                      height: 80,
                      borderRadius: 6,
                      justifyContent: "flex-end",
                    }}
                  />
                  <View
                    style={{
                      marginTop: 5,
                    }}
                  >
                    <Text
                      style={{
                        color: "#000",
                        fontWeight: "800",
                        fontSize: 15,
                      }}
                    >
                      {item.name}
                    </Text>
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

export default ByLocation;
