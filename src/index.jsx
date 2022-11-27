import "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import React from "react";
import * as SplashScreen from "expo-splash-screen";

import { hydrateAuth } from "./core";
import { RootNavigator } from "./navigation";

hydrateAuth();
SplashScreen.preventAutoHideAsync();

export default function App() {
  return (
    <BottomSheetModalProvider>
      <RootNavigator />
    </BottomSheetModalProvider>
  );
}
