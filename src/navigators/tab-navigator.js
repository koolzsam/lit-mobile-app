import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from "react";

import { BookmarkScreen, Home, ChatScreen, DetailsScreen, SearchScreen } from "@/screens";
import HomeSolidSVG from '@/assets/icons/home-solid.svg';
import ChatSVG from '@/assets/icons/chat.svg';
import BookmarkSVG from '@/assets/icons/bookmark.svg';

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // gestureEnabled: false,
        // animation: 'none',
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={Home}
      />
      <Stack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const tabs = [
  {
    name: "Home",
    component: HomeStack,
    label: "Home",
    icon: () => (<HomeSolidSVG width={20} height={20} fill="black" />),
  },
  {
    name: "Bookmarks",
    component: BookmarkScreen,
    label: "Bookmarks",
    icon: () => (<BookmarkSVG viewBox="-25 -25 95 95" fill="black" />),
  },
  {
    name: "Chat",
    component: ChatScreen,
    label: "Chat",
    icon: () => (<ChatSVG viewBox="-25 -25 95 95" fill="black" />),
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
        {tabs.map(({ name, component, label, icon }) => {
          return (
            <Tab.Screen
              key={name}
              name={name}
              component={component}
              options={{
                title: label,
                tabBarIcon: icon,
              }}
            />
          );
        })}
      </Tab.Group>
    </Tab.Navigator>
  );
};
