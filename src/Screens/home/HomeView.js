import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import R from "../../assets/R";
import { useNavigation } from "@react-navigation/native";
import SwiperComponent from "./SwiperComponent";
import InputForm from "../../components/Input/InputForm";

import PickerImg from "../../components/Picker/PickerImg";
import Header from "../../components/Header/Header";
import WeeklyCalendar from 'react-native-weekly-calendar'
import {Agenda} from "react-native-calendars"
import styles from "./style";
import { useState } from "react";

const data = [
  {
    id: 1,
    job: 'Hop lich'
  },
  {
    id: 2,
    job: 'Lam viec 1'
  }
]

const HomeView = (props) => {
  const navigation = useNavigation();
  const { listItem, listItem2 } = props;

  const [items, setItems] = useState({})

  const loadItems = (day) => {

    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);

        if (!items[strTime]) {
          items[strTime] = [];
          
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
              day: strTime
            });
          }
        }
      }
      
      const newItems = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      setItems(newItems)
    }, 1000);
  }

  const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }

  const renderItem = () => {  
    const item = data.map((item, index) => {
      return (
        <View key={index} style={styles.wrappDay}>
          <Text>{item.job}</Text>
        </View>
      )
    })
    return item
  }

  const renderDay = () => {

  }


  return (
    <View
      style={{
        flex: 1,
        backgroundColor: R.colors.white,
      }}
    >
      <Header title="Trang chủ" />
      <View style={{paddingHorizontal: 10}}>
        <View style={styles.user}>
          <View style={styles.name}>
            <Text style={{color: "#7A7A7A", fontSize: 18}}>Xin chào!</Text>
            <Text style={styles.txtName}>Nguyễn Đức Quang</Text>
          </View>
          <Image 
            style={styles.imgAvatar}
            source={require('../../assets/images/avatar.jpg')} 
          />
        </View>
        <View style={styles.boxJob}>
          <Text style={styles.txtJob}>Lịch công việc</Text>
          <Text style={styles.txtWeek}>Tháng 02 2022</Text>
        </View>

      </View>
        <Agenda 
          items={items}
          loadItemsForMonth={loadItems}
          selected={'2022-02-15'}
          renderItem={renderItem}
          theme={{
            // ...calendarTheme,
            // agendaDayTextColor: 'yellow',
            // agendaDayNumColor: 'green',
            selectedDotColor: R.colors.main,
            // agendaTodayColor: 'red',
            // agendaKnobColor: 'blue'
          }}
          // style={{paddingHorizontal: 20, backgroundColor: R.colors.white}}
        />

      
    </View>
  );
};



export default HomeView;
