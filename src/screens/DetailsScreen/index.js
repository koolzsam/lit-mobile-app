import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from "react-native";
import BackArrowIcon from '@/assets/icons/back-arrow-icon.svg';
import React from "react";
import Divider from "@/component/Divider";
import HeaderTitle from "@/component/HeaderTitle";
import MapPinSVG from '@/assets/icons/map-pin.svg';
import { theme } from "@/App";

export const DetailsScreen = ({ navigation }) => {
  const detailarray = [
    {
      type: "Layout",
      area: "3 BHK, 2 Baths",
    },
    {
      type: "Super Area",
      area: "2000 sq.ft.",
    },
    {
      type: "Furnishing",
      area: "Unfurnished",
    },
  ];

  const amenitiesarray = [
    {
      label: "Parking",
      icon: require("@/assets/images/icon-car.png"),
    },
    {
      label: "Parking",
      icon: require("@/assets/images/icon-home.png"),
    },
    {
      label: "Parking",
      icon: require("@/assets/images/icon-car.png"),
    },
    {
      label: "Parking",
      icon: require("@/assets/images/icon-home.png"),
    },
    {
      label: "Parking",
      icon: require("@/assets/images/icon-home.png"),
    },
    {
      label: "Parking",
      icon: require("@/assets/images/icon-car.png"),
    },
  ];
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => { navigation.goBack() }} style={styles.headerBtnStyle}>
            <View>
              <Text><BackArrowIcon width={20} height={22} color="#000000" /></Text>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <Image
            source={require("@/assets/images/RecentlyAdded/image-1.jpg")}
            style={{ width: Dimensions.get("screen").width, height: 350 }}
            resizeMode="cover"
          />
        </View>

        {/* Content */}
        <View style={{ paddingHorizontal: 15 }}>
          {/* Property Caption */}
          <View style={{ paddingVertical: 15 }}>
            <Text style={{ fontWeight: "800", fontSize: 32, lineHeight: 42, color: theme.colors.textDark }}>
              3 BHK independent house 2500 sq.ft.
            </Text>
          </View>

          {/* Property Address */}
          <View
            style={{
              paddingVertical: 15,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text style={{ fontWeight: "800", fontSize: 16, color: theme.colors.textDark }}>
                Indore, Madhya Pradesh, India
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: theme.colors.textDark,
                  marginTop: 5,
                }}
              >
                Skye apartment,Khajrana,{" "}
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <MapPinSVG width={20} height={20} color="#000" />
                <Text
                  style={{
                    color: "#3C68D9",
                    marginLeft: 4,
                    fontSize: 16,
                    borderBottomWidth: 1,
                    borderColor: "#3C68D9",
                  }}
                >
                  See map
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <Divider />

          {/* Property Details */}
          <View
            style={{
              paddingVertical: 15,
            }}
          >
            <HeaderTitle title="Property Details" />

            <View
              style={{
                marginTop: 20,
              }}
            >
              {detailarray.map((item, i) => {
                return (
                  <View
                    key={i}
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: 10,
                    }}
                  >
                    <Text style={{ fontSize: 16, flex: 1, color: theme.colors.textDark }}>{item.type}</Text>
                    <Text style={{ fontSize: 16, fontWeight: "800", color: theme.colors.textDark }}>
                      {item.area}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>

          <Divider />

          {/* Amenities */}
          <View
            style={{
              paddingVertical: 15,
            }}
          >
            <HeaderTitle title="Amenities" />

            <View
              style={{
                marginTop: 20,
              }}
            >
              {amenitiesarray.map((item, i) => {
                return (
                  <View
                    key={i}
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingVertical: 10,
                    }}
                  >
                    <Text style={{ fontSize: 16, color: theme.colors.textDark }}>{item.label}</Text>
                    <Image
                      source={item.icon}
                      resizeMode="contain"
                      style={{
                        fontSize: 16,
                        fontWeight: "800",
                        width: 30,
                        height: 30,
                      }}
                    />
                  </View>
                );
              })}
            </View>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingVertical: 10,
                }}
              >
                <Text style={{ fontSize: 16 }}></Text>
                <Text
                  style={{ fontSize: 16, color: "#3C68D9", fontWeight: "800" }}
                >
                  +more..
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    position: 'absolute',
    zIndex: 9
  },
  headerBtnStyle: {
    width: 44,
    height: 44,
    backgroundColor: '#fff',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
  }
})
