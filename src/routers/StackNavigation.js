import React, { Fragment, useRef, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigation";

import Login from "../Screens/Authen/Login";
import AddLetter from "../Screens/request/AddLetter";

import * as ScreenName from "./ScreenNames";
import RequestView from "../Screens/request/RequestView";
import Request from "../Screens/request/Request";
import Profile from "../Screens/Profile/Profile";
import ListUser from "../Screens/ListUser/ListUser";
import AddUser from "../Screens/ListUser/AddUser"
import UpdateUser from "../Screens/ListUser/UpdateUser";
import Home from "../Screens/home/Home";
import MyProfile from "../Screens/Profile/MyProfile";
import ChangePassword from "../Screens/Profile/ChangePassword";
import News from "../Screens/home/News";
import NotificationDetail from "../Screens/Notification/NotificationDetail";
import Contacts from "../Screens/home/Contacts";
import Jobs from "../Screens/home/Jobs";

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
      
      <Stack.Screen name={ScreenName.HOMESCREEN} component={Home} />
      <Stack.Screen name={ScreenName.NEWS} component={News} />
      <Stack.Screen name={ScreenName.CONTACTS} component={Contacts} />
      <Stack.Screen name={ScreenName.JOBS} component={Jobs} />
      <Stack.Screen name={ScreenName.NOTIFICATIONDETAIL} component={NotificationDetail} />
      <Stack.Screen name={ScreenName.PROFILE} component={Profile} />
      <Stack.Screen name={ScreenName.LOGINSCREEN} component={Login} />
      <Stack.Screen name={ScreenName.TABNAVIGATOR} component={TabNavigator} />
      <Stack.Screen name={ScreenName.ADDLETTER} component={AddLetter} />
      <Stack.Screen name={ScreenName.REQUESTVIEW} component={RequestView} />
      <Stack.Screen name={ScreenName.LISTUSER} component={ListUser} />
      <Stack.Screen name={ScreenName.ADDUSER} component={AddUser} />
      <Stack.Screen name={ScreenName.UPDATEUSER} component={UpdateUser} />
      <Stack.Screen name={ScreenName.MYPROFILE} component={MyProfile} />
      <Stack.Screen name={ScreenName.CHANGEPASSWORD} component={ChangePassword} />
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
