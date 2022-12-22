import React from "react";
import { View } from "react-native";

const Line = props => {
    const {
        height,
        backgroundColor,
        width
       } = props || {};
    return (
        <View style={{height:height,backgroundColor:backgroundColor,width:width}}></View>
    );
};

export default Line;
