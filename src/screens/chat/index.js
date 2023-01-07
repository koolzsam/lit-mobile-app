import { theme } from '@/App';
import React from 'react';
import { View, Text } from 'react-native';
import RangeSlider from '@/component/RangeSlider';
import { useFilter } from '@/core';

export const ChatScreen = () => {
  const { priceRange, setPriceRange } = useFilter();
  return (
    <View className="flex items-center justify-center">
      <Text>ChatScreen</Text>
      <RangeSlider
        min={priceRange[0]}
        max={priceRange[1]}
        steps={10}
        onValueChange={range => {
          setPriceRange([range.min, range.max]);
        }}
      />
    </View>
  );
};