import "react-native-gesture-handler";
import React from 'react'
import { hydrateAuth } from "@/core";
import { RootNavigator } from "@/navigators";
import { APIProvider } from '@/api';
import 'react-native-gesture-handler';
import { Provider as PaperProvider, MD3LightTheme as DefaultTheme, } from 'react-native-paper';

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
  <PaperProvider>
    <APIProvider>
      <RootNavigator />
    </APIProvider>
  </PaperProvider>
);

export default App
