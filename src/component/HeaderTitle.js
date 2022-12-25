import { View, Text } from "react-native";
import React from "react";

const HeaderTitle = ({ title }) => {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "800" }}>{title}</Text>
    </View>
  );
};

export default HeaderTitle;
