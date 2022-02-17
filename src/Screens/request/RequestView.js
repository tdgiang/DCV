import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from "@react-navigation/native";

import Header from '../../components/Header/Header';
import  AcceptScreen from './AcceptScreen'
import R from '../../assets/R';
import { ACCEPT, WAIT, REJECT } from '../../Config/constants'
import data from '../../apis/fakeData/dataLetter';
import { ADDLETTER } from '../../routers/ScreenNames';


const Tab = createMaterialTopTabNavigator();

const RequestView = (props) => {
    const navigate = useNavigation();

    const dataAccept = data.filter(item => {
        return item.status === ACCEPT
    })

    const dataWait = data.filter(item => {
        return item.status === WAIT
    })

    const dataReject = data.filter(item => {
        return item.status === REJECT
    })
    
    return (
        <>
            <Header title="Đơn từ" />
            <Tab.Navigator
                screenOptions={{
                    tabBarLabelStyle: { fontSize:20,fontWeight:'bold',textTransform:'none' },
                    activeTintColor:R.colors.black,
                    inactiveTintcolor:R.colors.red
                }}
                tabBarOptions={{
                    style:{
                        textAlign:'center',
                        height:50,
                        backgroundColor:R.colors.white,
                    },
                    indicatorStyle :{
                        // borderBottomWidth: 5,
                        // borderBottomColor: R.colors.main,
                        backgroundColor: R.colors.main
                        // width: 3
                        
                    },
                    // screenOptions = {tabBarLabelStyle: { fontSize:20,fontWeight:'bold',textTransform:'none' }},
                    activeTintColor:R.colors.black,
                    inactiveTintcolor:R.colors.red
                }}
                style={{}}
            >
                <Tab.Screen name="Đã Duyệt">
                    {props => <AcceptScreen {...props} data={dataAccept} />}
                </Tab.Screen>
                <Tab.Screen name="Chờ Duyệt">
                    {props => <AcceptScreen {...props} data={dataWait} />}
                </Tab.Screen>
                <Tab.Screen name="Không Duyệt">
                    {props => <AcceptScreen {...props} data={dataReject} />}
                </Tab.Screen>

            </Tab.Navigator>

            <View style={styles.addIcon}>
                <TouchableOpacity
                    onPress={() => {navigate.navigate(ADDLETTER)}}
                >
                    <AntDesign style={styles.icon}  name="pluscircleo" size={60} color="black" />
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    addIcon: {
        position: 'relative',
        borderRadius: 30,
        backgroundColor: '#fff',
        left: '80%',
        width: 60,
        height: 60,
        marginBottom: 20,
        alignItems: 'center'
    },
    icon: {
        color: R.colors.main,
        fontWeight: 'normal',
    }
})

export default RequestView


