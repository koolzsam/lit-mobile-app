import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import MapPinSVG from '@/assets/icons/map-pin.svg';
import ChevronDownSVG from '@/assets/icons/chevron-down.svg';
import BellSVG from '@/assets/icons/bell.svg';

const UserLocation = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <MapPinSVG width={20} height={20} color="black"/>
          <Text
            style={{ fontSize: 16, fontWeight: "800", marginHorizontal: 5 }}
          >
            Vijay Nagar, Indore
          </Text>
          <ChevronDownSVG width={20} height={20} color="black"/>
        </View>
        <TouchableOpacity>
          <BellSVG width={20} height={20} color="black"/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserLocation;
