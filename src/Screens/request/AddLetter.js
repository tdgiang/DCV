import React, {useState} from "react"
import {
    Text, View,
    StyleSheet, Alert
} from "react-native"
import DropDownPicker from 'react-native-dropdown-picker'
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";

import Header from "../../components/Header/Header"
import TextForm from "../../components/Input/InputForm"
import Button from "../../components/Button"
import R from '../../assets/R'
import PickerDate from "../../components/Picker/PickerDate"
import { REQUEST } from "../../routers/ScreenNames";
import { convertDate ,convertTimeApi} from "../../Config/Functions";

const AddLetter = () => {
    const navigate = useNavigation();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Đơn xin nghỉ phép', value: 'nghiphep'},
        {label: 'Đơn xin làm thêm giờ', value: 'lamthem'},
        {label: 'Đơn xin nghỉ việc', value: 'nghiviec'},
        {label: 'Đơn xin vắng mặt', value: 'vangmat'},
    ]);
    const [date, setDate] = useState(new Date())
    const handleOnChangeDate = (date) => {
        setDate(date)
        
    }

    const onSubmit = (data) => {
        let newData = {
            time: date,
            title: value,
            ...data
        }
        console.log(newData);
    };

    const handleCancel = () => {
        createTwoButtonAlert()
    }

    const createTwoButtonAlert = () =>
        Alert.alert(
        "Thông báo!",
        "Bạn có chắc chắn hủy lá đơn này?",
        [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            { text: "OK", onPress: () => navigate.navigate(REQUEST) }
        ]
    );
    
    return (
        <View>
            <Header title="Tạo đơn từ" isBack={true} />
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
            {value !== null ? (
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
                    <Button backgroundColor={R.colors.colorTuChoi} title="HỦY ĐƠN " onPress={handleCancel} />
                </View>
            ) : <></>
            }
        </View>
    )
}

export default AddLetter