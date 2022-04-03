import { useFonts } from "expo-font";
import React, { useEffect } from "react";
import Scan from "./Pages/Scan/Scan";
import PeopleAndHis from "./Pages/PeopleAndHis/PeopleAndHis";
import Homepage from "./Pages/Homepage/Homepage";
import { View, Text, StyleSheet, Image } from "react-native";
import AppLoading from "expo-app-loading";
import Web from "./Pages/Homepage/comp/Custom_Buttons/Web";
import Web2 from "./Pages/Homepage/comp/Custom_Buttons/Web2";
import ScrollOsoby_Page from "./Pages/PeopleAndHis/ScrollOsoby_Page";
import Custom_Buttons from "./Pages/Homepage/comp/Custom_Buttons/Custom_Buttons";
import Setting_page from "./Pages/Homepage/comp/Settings/Setting_page";
import Admin_login from "./Pages/Homepage/comp/Settings/Admin/Admin_login";
import Admin_panel from "./Pages/Homepage/comp/Settings/Admin/Admin_panel/Admin_panel";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    BalooBhaijaan2: require("./src/BalooBhaijaan2.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#222" }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            detachPreviousScreen: false,
          }}
        >
          <Stack.Screen name="Home" component={Homepage} />
          <Stack.Screen name="Scan" component={Scan} />
          <Stack.Screen name="PeopleAndHis" component={PeopleAndHis} />
          <Stack.Screen name="ScrollOsoby_Page" component={ScrollOsoby_Page} />
          <Stack.Screen name="Setting_page" component={Setting_page} />
          <Stack.Screen name="Admin_login" component={Admin_login} />
          <Stack.Screen name="Admin_panel" component={Admin_panel} />
          <Stack.Screen name="Web" component={Web} />
          <Stack.Screen name="Web2" component={Web2} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
// fjdlsjlk
