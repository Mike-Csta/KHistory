import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import Scan from "./Pages/Scan/Scan";
import PeopleAndHis from "./Pages/PeopleAndHis/PeopleAndHis";
import Homepage from "./Pages/Homepage/Homepage";
import { View, Text, StyleSheet, Image } from "react-native";
import AppLoading from "expo-app-loading";
import Web from "./Pages/Homepage/comp/Custom_Buttons/Web";
import Web2 from "./Pages/Homepage/comp/Custom_Buttons/Web2";
import ScrollOsoby_Page from "./Pages/PeopleAndHis/ScrollOsoby_Page";
import CytatHis_Page from "./Pages/PeopleAndHis/CytatHis_Page";
import Custom_Buttons from "./Pages/Homepage/comp/Custom_Buttons/Custom_Buttons";
import Setting_page from "./Pages/Homepage/comp/Settings/Setting_page";
import Admin_login from "./Pages/Homepage/comp/Settings/Admin/Admin_login";
import Admin_panel from "./Pages/Homepage/comp/Settings/Admin/Admin_panel/Admin_panel";
import Cytat_editor from "./Pages/Homepage/comp/Settings/Admin/Admin_panel/Cytat_editor";
import Osoby_editor from "./Pages/Homepage/comp/Settings/Admin/Admin_panel/Osoby_editor";
import Osoby_editor_page from "./Pages/Homepage/comp/Settings/Admin/Admin_panel/Osoby_editor_page";
import ScrollZabytki_Page from "./Pages/PeopleAndHis/ScrollZabytki_Page";
import Osoby_Page from "./Pages/PeopleAndHis/Osoby_Page";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Osoby_Page_Page from "./Pages/PeopleAndHis/Osoby_Page_Page";
import Zabytki_Page from "./Pages/PeopleAndHis/Zabytki_Page";
import Zabytki_Page_Page from "./Pages/PeopleAndHis/Zabytki_Page_Page";
import App_Welcome from "./App_Welcome";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Stack = createNativeStackNavigator();

export default function App() {
  let [data, setData] = useState(false);
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("Welcome"); //TU MA BYĆ "Welcome", TO BŁĄD, KTÓREGO SZUKASZ
      setData(jsonValue != null ? JSON.parse(jsonValue) : false);
      console.log(jsonValue);
    } catch (e) {
      // error reading value
    }
  };
  useEffect(() => {
    getData();
  }, []);
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
          initialRouteName={data ? "Home" : "App_Welcome"}
          screenOptions={{
            headerShown: false,
            detachPreviousScreen: false,
          }}
        >
          <Stack.Screen name="Home" component={Homepage} />
          <Stack.Screen name="App_Welcome" component={App_Welcome} />
          <Stack.Screen name="Scan" component={Scan} />
          <Stack.Screen name="PeopleAndHis" component={PeopleAndHis} />
          <Stack.Screen name="ScrollOsoby_Page" component={ScrollOsoby_Page} />
          <Stack.Screen
            name="ScrollZabytki_Page"
            component={ScrollZabytki_Page}
          />
          <Stack.Screen name="Osoby_Page_Page" component={Osoby_Page_Page} />
          <Stack.Screen
            name="Zabytki_Page_Page"
            component={Zabytki_Page_Page}
          />
          <Stack.Screen name="CytatHis_Page" component={CytatHis_Page} />
          <Stack.Screen name="Setting_page" component={Setting_page} />
          <Stack.Screen name="Osoby_Page" component={Osoby_Page} />
          <Stack.Screen name="Zabytki_Page" component={Zabytki_Page} />
          <Stack.Screen name="Admin_login" component={Admin_login} />
          <Stack.Screen name="Admin_panel" component={Admin_panel} />
          <Stack.Screen name="Web" component={Web} />
          <Stack.Screen name="Web2" component={Web2} />
          <Stack.Screen name="Cytat_editor" component={Cytat_editor} />
          <Stack.Screen name="Osoby_editor" component={Osoby_editor} />
          <Stack.Screen
            name="Osoby_editor_page"
            component={Osoby_editor_page}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
// fjdlsjlk
