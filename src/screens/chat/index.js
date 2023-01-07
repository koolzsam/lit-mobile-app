import { theme } from '@/App';
import React from 'react';
import { View, Text } from 'react-native';

export const ChatScreen = () => {
  return (
    <View className="flex flex-1 items-center justify-center">
      <Text style={{ color: theme.colors.textDark, fontSize: 22 }}>ChatScreen</Text>
    </View>
  );
};