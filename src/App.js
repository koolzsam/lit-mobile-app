import "react-native-gesture-handler";
import React from 'react'
import { hydrateAuth } from "@/core";
import { RootNavigator } from "@/navigators";
import { APIProvider } from '@/api';

hydrateAuth();

const App = () => (
  <APIProvider>
    <RootNavigator />
  </APIProvider>
);

export default App
