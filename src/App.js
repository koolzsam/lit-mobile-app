import "react-native-gesture-handler";
import React from 'react'
import { hydrateAuth } from "@/core";
import { RootNavigator } from "@/navigators";
import { APIProvider } from '@/api';
import { Provider as PaperProvider, MD3LightTheme as DefaultTheme, } from 'react-native-paper';

import {
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
hydrateAuth();

export const theme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    primary: 'purple',
    secondary: 'orange',
    textDark: '#252525'
  },
};

const App = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <PaperProvider>
      <APIProvider>
        <RootNavigator />
      </APIProvider>
    </PaperProvider>
  </GestureHandlerRootView>
);

export default App
