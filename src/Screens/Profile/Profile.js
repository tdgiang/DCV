import React, {useState, useEffect, useCallback} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Image, ScrollView, Alert } from 'react-native'
import Header from '../../components/Header/Header'
import Button from '../../components/Button'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from "@react-navigation/native";
import {connect} from "react-redux"

import {
    MYPROFILE,
    CHANGEPASSWORD,
    LOGINSCREEN
  } from "../../routers/ScreenNames";
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';
import R from "../../assets/R";
import images from '../../assets/images';
import { EditUser, GetUser } from '../../apis/user'

function Profile (props) {
    const navigation = useNavigation()

    const user = props.user
    const handleLogOut = () => {
        Alert.alert(
            'Bạn muốn đăng xuất ?',
            '',
            [
              {text: 'Đăng xuất',style:'default',onPress: () => {
                AsyncStorage.clear();
                navigation.reset({
                  index: 0,
                  routes: [{ name: LOGINSCREEN }],
                });
                Alert.alert('Đăng xuất thành công')
              }},
              
              {text: 'Hủy',style:'cancel', onPress: () => console.log('Cancel Pressed!')},
            ],
            { cancelable: false }
          )
    }

    const OptionProfile = (props) => {
        const {option, screen} = props
        return (
            <TouchableOpacity onPress={() => navigation.navigate(screen)} style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32}}>
                <Text style={{fontSize: 16}}>{option}</Text>
                <Entypo name="chevron-right" size={24} color={R.colors.txtGray} />
            </TouchableOpacity>
        )
    }

    return (
        <View style={{flex: 1, backgroundColor: R.colors.white}}>
            <Header title="Thông tin" />
            <View style={{flex: 3, justifyContent: 'center', alignItems:"center", marginTop: 32}}>
                <Image style={{width: 150, height: 150, borderRadius: 100}} source={images.avatar} />
                <View style={{alignItems: 'center', paddingTop: 12}}>
                    <Text style={{fontSize: 16, fontWeight: '500', paddingBottom: 4}}>{user.name}</Text>
                    <Text style={{color: R.colors.txtGray}}>{user.email}</Text>
                </View>
            </View>
            <View style={{flex: 7, paddingHorizontal: 24, marginTop: 24}}>
                <OptionProfile option="Trang cá nhân" screen={MYPROFILE} />
                <OptionProfile option="Đổi mật khẩu" screen={CHANGEPASSWORD} />
                <Button title="Đăng xuất" 
                    backgroundColor={R.colors.main}
                    onPress={() => handleLogOut()}
                />
            </View>
        </View>
    )

}

const mapStateToProps = (state) => {
    return {
      user: state.userReducer,
    };
  };
  
  export default connect(mapStateToProps, {})(Profile);