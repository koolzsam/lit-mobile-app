import "react-native-gesture-handler";
import React from 'react'
import { hydrateAuth } from "@/core";
import { RootNavigator } from "@/navigators";
import { APIProvider } from '@/api';
import {
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
hydrateAuth();

const App = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <APIProvider>
      <RootNavigator />
    </APIProvider>
  </GestureHandlerRootView>
);

export default App
