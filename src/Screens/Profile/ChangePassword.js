import React, { useState, useEffect, } from "react";
import { View, Text, Image , Alert} from "react-native"
import { useNavigation } from "@react-navigation/native";

import Header from "../../components/Header/Header";
import Button from "../../components/Button";
import R from "../../assets/R";
import images from "../../assets/images";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GetUser, EditUser } from '../../apis/user'
import { useForm, Controller } from "react-hook-form";
import TextForm from "../../components/Input/InputForm";

function ChangePassword ()  {
    const navigation = useNavigation()
    const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const [response, setResponse] = useState([])

      useEffect(() => {
        getList()        
    }, [])
    
    const getList = async () => {
        const res = await GetUser({ })
        setResponse(res.data)
    }

    const onSubmit = async (data) => {
        if(data.oldPassword === response[0]?.password && data.newPassword === data.reNewPassword) {
            await EditUser({
                "password": data.newPassword
            })
            Alert.alert('Thay đổi mật khẩu thành công!')
            navigation.goBack()
        } else {
            Alert.alert('Giá trị nhập vào chưa chính xác!')
        }
    }

    const Info = (props) => {
        const { title, desc } = props

        return (
            <View style={{flexDirection: "row", justifyContent:"space-between", marginBottom: 24}}>
                <Text style={{color: R.colors.txtGray, fontSize: 16}}>{title}</Text>
                <TouchableOpacity>
                    <Text style={{fontSize: 16}}>{desc}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={{flex: 1, backgroundColor: R.colors.white}}>
            <Header title="ĐỔI MẬT KHẨU" isBack />
            <View style={{flex: 8, paddingHorizontal: 24, marginTop: 64}}>
                <Text style={{fontSize: 16, color: R.colors.black, fontWeight: "500", marginBottom: 24}}>Mật khẩu cũ</Text>
                
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextForm 
                            placeholder={"Nhập mật khẩu cũ"}
                            onBlur={onBlur}
                            textColor={R.colors.white}
                            placeHolderColor='#726D6D'
                            onChangeText={onChange}
                            error={errors.oldPassword}
                            value={value}
                            isPassword={true}
                        />
                        
                    )}
                    name={"oldPassword"}
                    defaultValue={""}
                />
                <View style={{paddingTop: 16}}>
                    <Text style={{fontSize: 16, color: R.colors.black, fontWeight: "500", marginBottom: 24}}>Mật khẩu mới</Text>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextForm 
                                placeholder={"Nhập mật khẩu mới"}
                                textColor={R.colors.white}
                                placeHolderColor='#726D6D'
                                onChangeText={onChange}
                                onBlur={onBlur}
                                error={errors.newPassword}
                                value={value}
                                isPassword={true}
                            />
                        )}
                        name={"newPassword"}
                        defaultValue={""}
                    />

                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextForm 
                            placeholder={"Nhập lại mật khẩu mới"}
                            textColor={R.colors.white}
                            placeHolderColor='#726D6D'
                            onChangeText={onChange}
                            onBlur={onBlur}
                            error={errors.reNewPassword}
                            value={value}
                            isPassword={true}
                        />
                        )}
                        name={"reNewPassword"}
                        defaultValue={""}
                    />                    
                </View>
            </View>
            <View style={{flex: 2}}>
                <Button 
                    title="Xác nhận" 
                    backgroundColor={R.colors.main} 
                    containerStyle={{height: 56, borderRadius: 20, marginHorizontal: 24, marginTop: 0, paddingHorizontal: 50}}
                    txtStyle={{color: R.colors.white}} 
                    onPress={handleSubmit(onSubmit)}
                />
            </View>
        </View>
    )
}

export default ChangePassword