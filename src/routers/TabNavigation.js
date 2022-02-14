import React from "react";
import { Image, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { connect } from "react-redux";
import R from "../assets/R";
import Octicons from "react-native-vector-icons/Octicons";
import Entypo from "react-native-vector-icons/Entypo"

import Home from "../Screens/home/Home";
import History from "../Screens/history/History";
import Notification from "../Screens/notification/Notification";
import Account from "../Screens/Account/Account";
import Profile from "../Screens/Profile/Profile"

const Tab = createBottomTabNavigator();

const TabNavigator = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        initialRouteName="Screen5"
        tabBarOptions={{ 
          activeTintColor: 'red',
          inactiveTintColor: '#000'
          
        }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Octicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="HistoryScreen"
          component={History}
          options={{
            tabBarLabel: "History",
            tabBarIcon: ({ color, size }) => (
              <Octicons name="history" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="NotificationScreen"
          component={Notification}
          options={{
            tabBarLabel: "Notification",
            tabBarIcon: ({ color, size }) => (
              <Octicons name="bell" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="AccountScreen"
          component={Account}
          options={{
            tabBarLabel: "Account",
            tabBarIcon: ({ color, size }) => (
              <Octicons name="person" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <Entypo name="circle-with-plus" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
  };
};

export default connect(mapStateToProps, {})(TabNavigator);
