/**
 * Space
 */
import React from 'react';
import {View} from 'react-native';
const Space = props => {
  const {height, width, backgroundColor} = props || {};
  return (
    <View
      style={{height: height, width: width, backgroundColor: backgroundColor}}
    />
  );
};

export default Space;