import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions, Modal } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from "@react-navigation/native";

import Header from '../../components/Header/Header';
import  AcceptScreen from './AcceptScreen'
import { ACCEPT, WAIT, REJECT } from '../../Config/constants'
import data from '../../apis/fakeData/dataLetter';
import { ADDLETTER } from '../../routers/ScreenNames';
import AddLetter from './AddLetter';
import DropDownPicker from 'react-native-dropdown-picker'
import { useForm, Controller } from "react-hook-form";

import TextForm from "../../components/Input/InputForm"
import Button from "../../components/Button"
import R from '../../assets/R'
import PickerDate from "../../components/Picker/PickerDate"

const {width, height} = Dimensions.get("screen")

const Tab = createMaterialTopTabNavigator();

const RequestView = (props) => {
    const navigate = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [newLetter, setNewLetter] = useState(null)

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Đơn xin nghỉ phép', value: 'Đơn xin nghỉ phép'},
        {label: 'Đơn xin làm thêm giờ', value: 'Đơn xin làm thêm giờ'},
        {label: 'Đơn xin nghỉ việc', value: 'Đơn xin nghỉ việc'},
        {label: 'Đơn xin vắng mặt', value: 'Đơn xin vắng mặt'},
    ]);
    const [date, setDate] = useState(new Date())
    const handleOnChangeDate = (date) => {
        setDate(date)
    }


    const dataAccept = data.filter(item => {
        return item.status === ACCEPT
    })

    const dataWait = data.filter(item => {
        return item.status === WAIT
    })

    const dataReject = data.filter(item => {
        return item.status === REJECT
    })

    const showAddLetter = () => {
        setModalVisible(!modalVisible);
    }

    const onSubmit = (data) => {
        const letter = {
            time: date,
            optionLetter: value,
            status: WAIT,
            user: 'QUANGND',
            ...data
        }
            setNewLetter(letter)

        setModalVisible(!modalVisible)
    };
    
    
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
                    {props => <AcceptScreen {...props} data={dataAccept} type={ACCEPT} />}
                </Tab.Screen>
                <Tab.Screen name="Chờ Duyệt">
                    {props => <AcceptScreen {...props} data={dataWait} letter={newLetter} type={WAIT}  />}
                </Tab.Screen>
                <Tab.Screen name="Không Duyệt">
                    {props => <AcceptScreen {...props} data={dataReject} type={REJECT} />}
                </Tab.Screen>

            </Tab.Navigator>

            <View style={styles.addIcon}>
                <TouchableOpacity
                    onPress={() => showAddLetter()}
                >
                    <AntDesign style={styles.icon}  name="pluscircleo" size={42} color="black" />
                </TouchableOpacity>
            </View>

            <Modal visible={modalVisible}>
                <View style={{ flex: 1 }}>
                <View>
            <Header title="Tạo đơn từ"/>
            <DropDownPicker
                open={open}
                setOpen={setOpen}
                value={value}
                items={items}
                setValue={setValue}
                setItems={setItems}
                placeholder="Chọn loại đơn từ"
                style={{
                    backgroundColor: "#F7F7F7",
                    borderColor: "transparent",
                    paddingLeft: 16
                }}
                labelStyle={{
                    fontWeight: "bold",
                }}
                textStyle={{
                    fontSize: 18,
                    fontWeight: "bold",

                }}
                containerStyle={{
                    // backgroundColor: 'red'
                }}
            />
                <View style={{padding: 16, backgroundColor: R.colors.white}}>
                    <View>
                        <PickerDate
                            value={date} 
                            title="Thoi gian"
                            onDateChange={handleOnChangeDate}
                            
                         />
                    </View>
                    <View>
                        <Text style={{fontSize: 16, marginLeft: 8, paddingBottom: 8}}>Hình thức đơn từ</Text>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextForm
                                    textColor={R.colors.white}
                                    placeHolderColor='#726D6D'
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    error={errors.type}
                                    fontSize={18}
                                />
                            )}
                            name="type"
                            defaultValue=""
                        />
                    </View>
                    <View>
                        <Text style={{fontSize: 16, marginLeft: 8, paddingBottom: 8}}>Lý do</Text>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextForm
                                    textColor={R.colors.white}
                                    placeHolderColor='#726D6D'
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    error={errors.reason}
                                    fontSize={18}
                                />
                            )}
                            name="reason"
                            defaultValue=""
                        />
                    </View>
                    <Button backgroundColor={R.colors.main} title="GỬI ĐƠN" onPress={handleSubmit(onSubmit)} />
                </View>
        </View>
                </View>
            </Modal>
            
        </>
    )
}

const styles = StyleSheet.create({
    addIcon: {
        position: 'relative',
        borderRadius: 30,
        backgroundColor: '#fff',
        left: '80%',
        width: 42,
        height: 42,
        marginBottom: 20,
        alignItems: 'center'
    },
    icon: {
        color: R.colors.main,
        fontWeight: 'normal',
    }
})

export default RequestView


