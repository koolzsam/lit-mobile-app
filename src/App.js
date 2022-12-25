import "react-native-gesture-handler";
import React from 'react'
import { hydrateAuth } from "./core";
import { RootNavigator } from "./navigators";

hydrateAuth();

const App = () => (
  <RootNavigator />
);

export default App
