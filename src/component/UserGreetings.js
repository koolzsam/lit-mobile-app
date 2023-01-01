import { View, Text } from "react-native";
import React from "react";

const UserGreetings = () => {
  return (
    <View>
      <View style={{ marginBottom: 5 }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "800",
            color: "#000",
          }}
        >
          Hi Divesh G
        </Text>
      </View>
    </View>
  );
};

export default UserGreetings;
