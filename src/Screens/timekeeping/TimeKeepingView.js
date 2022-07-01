import React, {useState} from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import moment, {} from "moment";
import { Calendar } from "react-native-calendars"

import R from "../../assets/R";
import Header from "../../components/Header/Header";
import styles from "./styles";
import { checkin } from "../../apis/fakeData/checkin";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const TimeKeepingView = (props) => {
  const [isCheck, setIsCheck] = useState(false)
  const [isCheckOut, setIsCheckOut] = useState(false)
  const [timerIn, setTimerIn] = useState(null)
  const [timerOut, setTimerOut] = useState(null)
  const [timeKeep, setTimeKeep] = useState([])

  let format = 'h:mm'
  let currTime = moment().format(format)
  let time = moment(currTime, format)
  let beforeTime = moment('01:30', format)
  let afterTime = moment('04:00', format);

  const handleCheckin = () => {
    if (time.isBetween(beforeTime, afterTime)) {
      setIsCheck(true)
      setTimerIn(currTime)
      console.log('is between')
    
    } else {
      setIsCheck(false)
    
      Alert.alert(
        'Đã quá giờ chấm công'
      )
    
    }
  }

  console.log(timerIn);

  const handleCheckOut = () => {
    let beforeTime = moment('01:30', format)
    let afterTime = moment('04:00', format);
    if (time.isBetween(beforeTime, afterTime)) {
       
      console.log('is between')
      setIsCheckOut(true)
      setTimerOut(currTime)
  
    } 
    else {
      setIsCheckOut(false)
    
      Alert.alert(
        'Đã quá giờ chấm công'
      )
    
    }
  }

  const getCheckIn = () => {
    let currDay = moment().format("MMM Do YY");   
    if (timerIn !== null && timerOut !== null) {
      return {
        checkin: timerIn,
        checkout: timerOut
      }

    }       
  }

  console.log(getCheckIn());

  // let total = checkin.forEach((item, index) => {
  //   const value = Object.values(item)
  //   const timeCheck = value.map(obj => {
  //     let time = moment(obj.checkin, format)
  //     let beforeTime = moment('09:00', format)
  //     let afterTime = moment('09:30', format);
  //     if (time.isBetween(beforeTime, afterTime)) {
  //       console.log('true: ', obj)
        
  //     } else {
  //       console.log('late: ', obj)
      
      
  //     }
  //   })
  //   // console.log(timeCheck);
  // })

  return (
    <View style={{ flex: 1, backgroundColor: "#FDFDFD" }}>
      <Header title="Chấm công" />
      <View style={styles.wrapper}>
        <View style={styles.checkIn}>
          <Text style={styles.checkInText}>
            CHECKIN
          </Text>
          <View style={styles.line} />
        </View>
        <View style={styles.checkDate}>
          <View style={styles.checkDateItem}>
            <Text style={styles.txtDate}>Ngày công</Text>
            <Text style={[styles.numberDate, styles.numberWorkDay]}>10</Text>
          </View>
          <SimpleLineIcons style={styles.icon} name="options-vertical" size={18} color="black" />
          <View style={styles.checkDateItem}>
            <Text style={styles.txtDate}>Đi muộn</Text>
            <Text style={[[styles.numberDate, styles.numberLate],]}>9</Text>
          </View>
          <SimpleLineIcons style={styles.icon} name="options-vertical" size={18} color="black" />
          <View style={styles.checkDateItem}>
            <Text style={styles.txtDate}>Ngày nghỉ</Text>
            <Text style={[styles.numberDate, styles.numberQuit]}>3</Text>
          </View>
        </View>
        <View style={styles.checkInSchedule}>
          <Text style={styles.headingSchedule}>Lịch check-in</Text>
          <Text style={styles.scheduleDesc}>Chọn ngày để xem checkin</Text>
        </View>
        {/* <Text style={styles.getMonth}>Tháng 02 2022</Text> */}
        <Calendar 
          markingType={'period'}
          markedDates={{
            '2022-05-20': {textColor: R.colors.main},
            '2022-05-22': {textColor: R.colors.colordb2},
            '2022-05-23': {textColor: R.colors.colorf39},
            '2022-05-04': {textColor: R.colors.main}
          }}
          

          theme={{textDayFontWeight: "bold", dayTextColor: "#A09E9E"}}
          style={{paddingVertical: 10}}
        />
        <View style={styles.checkinDetail}>
          <View style={styles.leftDetail}>
            <Text style={styles.dateDetail}>{moment().format('dddd')}</Text>
            <Text style={styles.dateDetail}>{moment().format('l')}</Text>
          </View>
          <View style={styles.rightDetail}>
            <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 12, alignItems: "center"}}>
              <Text style={styles.checkTimeDetail}>Checkin: </Text>
              <TouchableOpacity onPress={() => handleCheckin()}>
                {
                  isCheck ? (
                    <Text style={styles.checkTimeDetail}>{timerIn}</Text>
                    ) : (
                      <AntDesign name="checkcircle" size={28} color={R.colors.main} />
                    )
                }
                
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 12, alignItems: "center"}}>
              <Text style={styles.checkTimeDetail}>Checkout: </Text>
              <TouchableOpacity onPress={() => handleCheckOut()}>
              {
                  isCheckOut ? (
                    <Text style={styles.checkTimeDetail}>{timerOut}</Text>
                    ) : (
                      <AntDesign name="checkcircle" size={28} color={R.colors.main} />
                    )
                }

              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TimeKeepingView;
