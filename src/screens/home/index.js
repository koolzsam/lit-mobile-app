import {
  View,
  ScrollView,
} from "react-native";
import React from "react";
import SelectProperties from "@/component/Home/SelectProperties";
import ByLocation from "@/component/Home/ByLoaction";
import RecentlyAdded from "@/component/Home/RecentlyAdded";
import Search from "@/component/Home/Search";
import UserGreetings from "@/component/Home/UserGreetings";

export const Home = (props) => {
  return (
    <ScrollView>
      <View style={{ flex: 1, marginTop: 60, paddingHorizontal: 20 }}>
        {/* User Greetings */}
        <UserGreetings />

        {/* Search Bar */}
        <Search props={props} />

        {/* Properties Types */}
        <SelectProperties />

        {/* By Location */}
        <ByLocation />

        {/* Recently Added */}
        <RecentlyAdded props={props} />
      </View>
    </ScrollView>
  );
};
