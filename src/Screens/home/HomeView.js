import React, { Component, createRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from "react-native";
import R from "../../assets/R";
import { useNavigation, useScrollToTop } from "@react-navigation/native";
import SwiperComponent from "./SwiperComponent";
import InputForm from "../../components/Input/InputForm";
import Octicons from "react-native-vector-icons/Octicons"
import Entypo from "react-native-vector-icons/Entypo"
import AntDesign from "react-native-vector-icons/AntDesign"
import { connect } from "react-redux"
import Swiper from 'react-native-swipeout'

import PickerImg from "../../components/Picker/PickerImg";
import Header from "../../components/Header/Header";
import { Agenda, Calendar, WeekCalendar } from "react-native-calendars"
import styles from "./style";
import { useState } from "react";
import images from "../../assets/images";
import { NEWS, CONTACTS, JOBS } from "../../routers/ScreenNames"

const agendaRef = createRef();

const data = [
  // {
  //   id: 0,
  //   title: "Công việc",
  //   icon: () => (
  //     <View>

  //       <Octicons name="tasklist" size={32} color={R.colors.main} />
  //     </View>
  //   )
  // },
  // {
  //   id: 1,
  //   title: "Dự án",
  //   icon: () => (
  //     <View>
  //     <Octicons name="project" size={32} color={R.colors.main} />
  //     </View>
  //   )
  // },
  // {
  //   id: 2,
  //   title: "Báo cáo",
  //   icon: () => (
  //     <View>
  //     <Entypo name="text-document" size={32} color={R.colors.main} />
  //     </View>

  //   )
  // },
  {
    id: 3,
    title: "Bảng công",
    icon: () => (
      <View>
      <AntDesign name="calendar" size={32} color={R.colors.main} />
      </View>

    ),
    screen: JOBS
  },
  {
    id: 4,
    title: "Tin tức",
    icon: () => (
      <View>
        <Entypo name="news" size={32} color={R.colors.main} />

      </View>
    ),
    screen: NEWS
  },
  {
    id: 5,
    title: "Liên hệ",
    icon: () => (
      <View>
        <AntDesign name="contacts" size={32} color={R.colors.main} />
      </View>
    ),
    screen: CONTACTS
  },
  

]

const jobData = {
  '2022-05-30': [{name: 'Họp ban kỹ thuật'}, {name: 'Lam du an'}],
  '2022-05-31': [{name: 'Họp ban kỹ thuật'}],
  '2022-06-01': [{name: 'Product Delivery And Billing', height: 80}],
  '2022-06-02': [{name: 'UI Delicious App'}],
  '2022-06-03': [{name: 'Họp ban kỹ thuật'}, {name: 'Edit and Update'}],
  '2022-06-04': [{name: 'Phân tích dự án'}, {name: 'Edit and Update'}],
  '2022-06-05': [{name: 'Test tính năng'}, {name: 'Edit and Update'}],
  '2022-06-06': [{name: 'Debug App'}, {name: 'Edit and Update'}],
  '2022-06-07': [{name: 'Plant Work'}, {name: 'Edit and Update'}],
  '2022-06-08': [{name: 'Plant Work'}, {name: 'Edit and Update'}],
}

const HomeView = (props) => {
  console.warn = () => {}
  const navigation = useNavigation();
  const { listItem, listItem2 } = props;

  const [items, setItems] = useState({})
  const [activeRowKey, setActiveRowKey] = useState({})

  const user = props.user

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

  const renderItem = (item, index) => {  

    const swiperSettings = {
      autoClose: true,
      onClose: (secId, rowId, direction) => {
        if (activeRowKey != null) {
          setActiveRowKey({activeRowKey: null})
        }
      },
      onOpen: (secId, rowId, direction) => {
        setActiveRowKey({activeRowKey: item.name})
      },
      right: [
        
        {
          onPress: () => {
          },
          text: 'Sửa', type: 'edit', backgroundColor: R.colors.main
        },
        {
          onPress: () => {
            delete item.name
            console.log(item)

          },
          text: 'Xóa', type: 'delete', backgroundColor: R.colors.red1
        },
      ] 
    }

      return (
        <Swiper style={{backgroundColor: R.colors.white, marginBottom: 12, borderRadius: 10}} >
            <View key={index} style={styles.wrappDay}>
                <Text>{item.name}</Text>
            </View>
          
        </Swiper>
      )
  }

  const handleRenderDay = (day) => {
    setSelected(day)
  }


  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ backgroundColor: R.colors.main }}>
          <View style={styles.squreStyle} />
          <View style={styles.arcStyle} />
        </View>
        <View style={{position: "relative",flex: 0.1}}>
          <View style={[{
            marginLeft: 20,
            backgroundColor: R.colors.white, 
            borderRadius: 10,
            position: "absolute",
            top: -30,
            width: '90%',
            height: 130,
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000
            }, styles.shadow]}>
              <View style={{position: "absolute", top: -50, }}>
                <Image style={{width: 100, height: 100, borderRadius: 70, borderWidth: 2, borderColor: R.colors.white}} source={images.avatar} />

              </View>
              <View style={{marginTop: 16, alignItems: "center"}}>
                <Text style={{fontWeight: '600', fontSize: 16, marginTop: 16}}>{user.name}</Text>
                <Text style={{paddingTop: 8, color: R.colors.txtGray, fontWeight: "600"}}>Nhân viên kỹ thuật</Text>

              </View>

          </View>
        </View>
          <View style={{height: 120}} />
        <View style={{flex: 0.5, flexWrap: "wrap", flexDirection: "row", paddingHorizontal: 12}}>
          {data.map((item) => (
          <TouchableOpacity key={item.id} style={[{width: '30%',
            backgroundColor: R.colors.white, 
            height: 130, 
            borderRadius: 10, 
            marginHorizontal: 6, 
            marginBottom: 12,
            justifyContent: "center",
            alignItems: "center"
          }, styles.shadow]}
            onPress={() => navigation.navigate(item.screen)}
          >
            <View>{item.icon()}</View>
            <Text style={{paddingTop: 8, fontSize: 16}}>{item.title}</Text>
          </TouchableOpacity>

          ))}
          

        </View>
      <View style={{flex: 0.4, backgroundColor: R.colors.white, paddingTop: 16, marginTop: 24}}>
        <Text style={{ paddingHorizontal: 24, fontSize: 16, fontWeight: '600'}}>Lịch công việc trong tuần: </Text>
        <Agenda
            items={jobData}  
            selected={new Date()}
            minDate={'2022-04-10'}
            maxDate={'2022-06-30'}
            renderItem={( items ) => renderItem(items)}
        />
      </View>
      </ScrollView>

    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer,
  };
};

export default connect(mapStateToProps, {})(HomeView);
