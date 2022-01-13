import React from "react";
import Home from "./Pages/Home/Home";
import Web from "./Pages/Web/Web";
import Web2 from "./Pages/Web/Web2";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="history"
      screenOptions={{
        gestureResponseDistance: { horizontal: 1 },
        tabBarLabelStyle: {
          fontSize: 0,
          height: 0,
        },
        tabBarItemStyle: { height: 0 },
        tabBarStyle: {
          backgroundColor: "black",
          height: 0,
        },
      }}
    >
      <Tab.Screen
        name="jeden"
        component={Web2}
        options={{ swipeEnabled: false }}
      />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="Settings"
        component={Web}
        options={{ swipeEnabled: false }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
