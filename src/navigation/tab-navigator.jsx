import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import { Settings, Home, Login } from "../screens";

const Tab = createBottomTabNavigator();

const tabs = [
  {
    name: "Home",
    component: Home,
    label: "Home",
  },
  {
    name: "Settings",
    component: Settings,
    label: "Settings",
  },
  {
    name: "Login",
    component: Login,
    label: "Login",
  }
];

export const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Group 
        screenOptions={{
          headerShown: false,
        }}
      >
        {tabs.map(({ name, component, label }) => {
          return (
            <Tab.Screen
              key={name}
              name={name}
              component={component}
              options={{
                title: label,
              }}
            />
          );
        })}
      </Tab.Group>
    </Tab.Navigator>
  );
};
