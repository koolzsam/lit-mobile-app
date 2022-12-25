import {
  View,
  ScrollView,
} from "react-native";
import React from "react";
import PropertiesTiles from "@/component/PropertiesTiles";
import ByLocation from "@/component/ByLoaction";
import RecentlyAdded from "@/component/RecentlyAdded";
import Search from "@/component/Search";
import UserGreetings from "@/component/UserGreetings";
import UserLocation from "@/component/UserLocation";

export const Home = (props) => {
  return (
    <ScrollView>
      <View style={{ flex: 1, marginTop: 60, paddingHorizontal: 20 }}>
        {/* User Greetings */}
        <UserGreetings />

        {/* Location */}
        <UserLocation />

        {/* Search Bar */}
        <Search />

        {/* Properties Types */}
        <PropertiesTiles />

        {/* By Location */}
        <ByLocation />

        {/* Recently Added */}
        <RecentlyAdded props={props} />
      </View>
    </ScrollView>
  );
};
