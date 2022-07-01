import React, {useState} from "react";
import { Image, View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { connect } from "react-redux";
import R from "../assets/R";
import Octicons from "react-native-vector-icons/Octicons";
import Entypo from "react-native-vector-icons/Entypo"
import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from "react-native-vector-icons/Feather"

import Home from "../Screens/home/Home";
import Request from "../Screens/request/Request";
import TimeKeeping from "../Screens/timekeeping/TimeKeeping";
import Notification from "../Screens/Notification/Notification";
import Profile from "../Screens/Profile/Profile"
import { listNotifi } from '../Screens/Notification/NotificationItem'

const Tab = createBottomTabNavigator();

const TabNavigator = (props) => {
  const [isClicked, setIsClicked ] = useState(false)

  console.log(props);
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        initialRouteName="Screen5"
        tabBarOptions={{ 
          activeTintColor: '#119078',
          inactiveTintColor: '#000'
          
        }}
      >
        <Tab.Screen
          name="HomeScreen"
          component={Home}
          options={{
            tabBarLabel: "Trang chủ",
            tabBarIcon: ({ color, size }) => (
              <Octicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="RequestScreen"
          component={Request}
          options={{
            tabBarLabel: "Đơn từ",
            tabBarIcon: ({ color, size }) => (
              // <Octicons name="history" size={size} color={color} />
              <AntDesign name="mail" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="TimeKeepingScreen"
          component={TimeKeeping}
          options={{
            tabBarLabel: "Chấm công",
            tabBarIcon: ({ color, size }) => (
              <Feather name="check-circle" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="AccountScreen"
          component={Notification}
          listeners={{
            tabPress: () => {
              setIsClicked(true)
            }
          }}
          options={{
            tabBarLabel: "",
            tabBarOnPress: ({click}) => {
              click(setIsClicked(true))
              
            },
            tabBarIcon: ({ color, size, focused, click }) => (
              <View style={{alignItems: "center", position:"relative"}}>
                <AntDesign name="bells" size={size} color={color} />
                <Text style={{fontSize: 10, paddingTop: 0, position: "absolute", top: 30, color: focused ? R.colors.main : R.colors.black}}>Thông báo</Text>
                  {isClicked ? null : (
                    
                    <View style={{position: "absolute",alignItems: "center", justifyContent: "center", right: -10, top: -4, width: 20, height: 20, borderRadius: 20, backgroundColor: R.colors.red1}}>
                    <Text style={{color: R.colors.white, fontSize: 14, fontWeight: '600'}}>{listNotifi.length}</Text>
                  </View>
                  )}
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Thông tin",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="user" size={size} color={color} />
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
