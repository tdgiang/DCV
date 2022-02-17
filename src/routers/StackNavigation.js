import React, { Fragment, useRef, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigation";

import Login from "../Screens/Authen/Login";
import AddLetter from "../Screens/request/AddLetter";

import * as ScreenName from "./ScreenNames";
import RequestView from "../Screens/request/RequestView";
import Request from "../Screens/request/Request";

const Stack = createStackNavigator();

function MyStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStatusBarHeight: 0,
      }}
      headerMode={"none"}
      initialRouteName={ScreenName.LOGINSCREEN}
    >
      <Stack.Screen name={ScreenName.LOGINSCREEN} component={Login} />
      <Stack.Screen name={ScreenName.TABNAVIGATOR} component={TabNavigator} />
      <Stack.Screen name={ScreenName.ADDLETTER} component={AddLetter} />
      <Stack.Screen name={ScreenName.REQUEST} component={Request} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Fragment>
      <NavigationContainer independent={true}>
        <MyStack />
      </NavigationContainer>
    </Fragment>
  );
}
