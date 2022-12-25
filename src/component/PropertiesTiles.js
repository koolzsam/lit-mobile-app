import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import React from "react";
import { propertiesData } from "@/constants/mocks";

const PropertiesTiles = () => {
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
          Select properties
        </Text>
        <TouchableOpacity>
          <Text style={{ color: "#025A63", fontWeight: "800" }}>See All</Text>
        </TouchableOpacity>
      </View>

      {/* Properties data tiles */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          {propertiesData.map((item) => {
            return (
              <View
                key={item.id}
                style={{
                  borderRadius: 10,
                  overflow: "hidden",
                  marginRight: 10,
                }}
              >
                <TouchableOpacity>
                  <ImageBackground
                    source={item.image}
                    resizeMode="cover"
                    imageStyle={{
                      overlayColor: "#000",
                    }}
                    style={{
                      width: 187,
                      height: 110,
                      justifyContent: "flex-end",
                    }}
                  >
                    <View
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Text
                        style={{
                          color: "#fff",
                          fontWeight: "800",
                          fontSize: 16,
                          paddingBottom: 10,
                          paddingHorizontal: 20,
                        }}
                      >
                        {item.name}
                      </Text>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default PropertiesTiles;