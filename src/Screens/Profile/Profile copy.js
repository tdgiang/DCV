import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native'
import Header from '../../components/Header/Header'
import Button from '../../components/Button'

import { useNavigation } from "@react-navigation/native";
import {
    REGISTER,
    TABNAVIGATOR,
    FORGOTPASSWORD,
    LISTUSER
  } from "../../routers/ScreenNames";
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';

import data from '../../apis/fakeData/dataLetter'
import { getListUser } from '../../apis/Functions/users'
import R from "../../assets/R";
import TextForm from "../../components/Input/InputForm";
import I18n from "../../helper/i18/i18n";
import { useForm, Controller } from "react-hook-form";
import { LoginApi } from '../../apis/user'
import  url from '../../apis/url'
import KEY from '../../assets/AsynStorage'


function Profile (props) {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigation();

    const onSubmit = async (data) => {
        const response = await LoginApi({ ...data })
        console.log(data)
        console.log(response.data.code);
        if (response.data.code === '200' &&  response.status === 200) {
            await AsyncStorage.setItem(
                KEY.TOKEN,
                response.data.data.token
            )
                navigate.navigate(LISTUSER)
        } else {
            console.log('Sai tai khoan hoac mat khau');
        }
        
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 12}}>
            {/* <Header title="Profile" /> */}
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextForm
                        textColor={R.colors.white}
                        placeHolderColor='#726D6D'
                        placeholder={I18n.t("Email")}
                        // fontSize="24"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        error={errors.username}
                        fontSize={18}
                    />
                )}
                name="username"
                defaultValue=""
            />
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextForm
                        textColor={R.colors.white}
                        placeHolderColor='#726D6D'
                        // placeholder={I18n.t("PassWord")}
                        placeholder="Password"
                        // fontSize="24"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        isPassword={true}
                        error={errors.password}
                        fontSize={20}
                    />
                )}
                name="password"
                defaultValue=""
            />

            <Button
                onPress={handleSubmit(onSubmit)}
                // title={I18n.t("Login")}
                backgroundColor={R.colors.main}
                title={("ĐĂNG NHẬP")}
                containerStyle={{marginTop: 8}}
            />
        </View>
        
    )
}

const styles = StyleSheet.create({
    boxUser: {
        marginHorizontal: 36,
        flexDirection: 'row',
        paddingVertical: 16,
        marginVertical: 12,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    username: {
        marginLeft: 12
    },
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },  
    button: {
        padding: 8,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 32,
        marginRight: 8
    },
    active: {
        backgroundColor: '#ccc',
    },
    text: {
        paddingHorizontal: 16,
        marginVertical: 32,
        fontSize: 18,
    }
})

export default Profile