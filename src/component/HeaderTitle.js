import { View, Text } from "react-native";
import React from "react";
import { theme } from "@/App";

const HeaderTitle = ({ title }) => {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "800", color: theme.colors.textDark }}>{title}</Text>
    </View>
  );
};

export default HeaderTitle;
