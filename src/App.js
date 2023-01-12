import "react-native-gesture-handler";
import React from 'react'
import { hydrateAuth } from "@/core";
import { RootNavigator } from "@/navigators";
import { APIProvider } from '@/api';
import { Provider as PaperProvider } from 'react-native-paper';

import {
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
hydrateAuth();

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
