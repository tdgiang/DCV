import React from "react";
import { View, Text } from "react-native"
import R from "../../assets/R";
import { Calendar } from "react-native-calendars"
import AntDesign from "react-native-vector-icons/AntDesign"

import Header from "../../components/Header/Header";

export default () => {
    return (
        <View style={{flex: 1, backgroundColor: R.colors.white}}>
            <Header title="Bảng công" isBack={true} />
            <View >
                <Calendar 
                    markingType={'period'}
                    markedDates={{
                        '2022-05-03': {textColor: R.colors.colordb2},
                        '2022-05-20': {textColor: R.colors.main},
                        '2022-05-26': {textColor: R.colors.colordb2},
                        '2022-05-23': {textColor: R.colors.colorf39},
                        '2022-05-04': {textColor: R.colors.main},
                        '2022-05-05': {textColor: R.colors.main},
                        '2022-05-06': {textColor: R.colors.main},
                        '2022-05-07': {textColor: R.colors.main},
                        '2022-05-09': {textColor: R.colors.main},
                        '2022-05-10': {textColor: R.colors.main},
                        '2022-05-11': {textColor: R.colors.main},
                        '2022-05-12': {textColor: R.colors.main},
                        '2022-05-13': {textColor: R.colors.main},
                        '2022-05-14': {textColor: R.colors.colorf39},
                        '2022-05-16': {textColor: R.colors.colorf39},
                    }}
                    theme={{textDayFontWeight: "bold", dayTextColor: "#A09E9E"}}
                    style={{paddingVertical: 10}}
                    />
            </View>
            <View style={{paddingHorizontal: 12, flexDirection: "row", alignItems: "center", marginBottom: 12}}>
                <AntDesign name="checkcircleo" size={26} color={R.colors.main} />
                <Text style={{fontSize: 18, marginLeft: 8}}>Số công đã làm: </Text>
                <Text style={{color: R.colors.main, fontSize: 22, fontWeight: "500", marginLeft: 8}}>10</Text>
            </View>
            <View style={{paddingHorizontal: 12, flexDirection: "row", alignItems: "center", marginBottom: 12}}>
                <AntDesign name="checkcircleo" size={26} color={R.colors.main} />
                <Text style={{fontSize: 18, marginLeft: 8}}>Số công muộn: </Text>
                <Text style={{color: R.colors.colorf39, fontSize: 22, fontWeight: "500", marginLeft: 8}}>3</Text>
            </View>
            <View style={{paddingHorizontal: 12, flexDirection: "row", alignItems: "center"}}>
                <AntDesign name="checkcircleo" size={26} color={R.colors.main} />
                <Text style={{fontSize: 18, marginLeft: 8}}>Số công đã nghỉ: </Text>
                <Text style={{color: '#DB2F09', fontSize: 22, fontWeight: "500", marginLeft: 8}}>2</Text>
            </View>
        </View>
    )
}