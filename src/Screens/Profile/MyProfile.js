import React, { useState, useEffect, useCallback } from "react";
import { View, Text, Image, Alert } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux"

import { saveUserToRedux } from '../../actions/users'
import Header from "../../components/Header/Header";
import Button from "../../components/Button";
import R from "../../assets/R";
import images from "../../assets/images";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { TouchableOpacity } from "react-native-gesture-handler";
import { EditUser, GetUser } from '../../apis/user'
import { useForm, Controller } from "react-hook-form";
import TextForm from "../../components/Input/InputForm";

function MyProfile (props)  {
    const navigation = useNavigation()

    const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const [editing, setEditing] = useState(null)
    const [profileEdit, setProfileEdit] = useState({})
    const [response, setResponse] = useState([])
    const [user, setUser] = useState({})

    useEffect(() => {
        getList()        
    }, [])
    
    const getList = (async () => {
        const res = await GetUser({ })
        setResponse(res.data)
    })

    const onSubmit = async (data) => {
        const editUser = await EditUser({
            "username" : data.username,
            "name": data.name,
            "sdt": data.sdt,
            "email": data.email,
            "CCCD": data.CCCD,
            "address": data.address
        })
        props.saveUserToRedux(editUser.data)
        Alert.alert('Thay đổi thông tin thành công!')
        getList()
        navigation.goBack()
        console.log(data)
    }


    const Info = (props) => {
        const { title, defaultValue, name } = props

        return (
            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 0}}>
                <Text style={{color: R.colors.txtGray, fontSize: 16, fontWeight: "600"}}>{title}</Text>
                <View style={{marginBottom: -12}}>

                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextForm
                            textColor={R.colors.white}
                            // placeholder={"Email"}
                            // fontSize="24"
                            onChangeText={onChange}
                            value={value}
                            fontSize={18}
                            containerStyle={{backgroundColor: R.colors.white, paddingVertical: 0,
                                paddingHorizontal: 12, paddingTop: 12
                            }}
                        />
                    )}
                    name={name}
                    defaultValue={defaultValue}
                />
                </View>
            </View>
        )
    }

    return (
        <View style={{flex: 1, backgroundColor: R.colors.white}}>
            <Header title="Trang cá nhân" isBack />
            <View style={{flex: 8, paddingHorizontal: 32, marginTop: 32}}>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 16}}>
                    <Image style={{width: 150, height: 150, borderRadius: 100}} source={images.avatar} />
                    <View style={{alignItems: 'center', paddingTop: 12}}>
                        <Text style={{fontSize: 16, fontWeight: '500', paddingBottom: 4}}>{response[0]?.name}</Text>
                        <Text style={{fontSize: 14, fontWeight: '400', color: R.colors.txtGray}}>Thay đổi ảnh</Text>
                    </View>
                </View>
                <View>
                    <Info title="Mã NV" 
                        name="username"
                        defaultValue={response[0]?.username}
                    />
                    <Info title="Họ tên"
                        name="name"
                        defaultValue={response[0]?.name}
                    />
                    <Info title="Số điện thoại"
                        name="sdt"
                        defaultValue={response[0]?.sdt}
                    />
                    <Info title="Email"
                        name="email"
                        defaultValue={response[0]?.email}
                    />
                    <Info title="CCCD"
                        name="CCCD"
                        defaultValue={response[0]?.CCCD}
                    />
                    <Info title="Địa chỉ"
                        name="address"
                        defaultValue={response[0]?.address}
                    />
                </View>
            </View>
            <View style={{flex: 2}}>
                <Button 
                    title="Lưu" 
                    backgroundColor={R.colors.main} 
                    containerStyle={{height: 56, borderRadius: 20, marginHorizontal: 24, marginTop: 0, paddingHorizontal: 50}}
                    txtStyle={{color: R.colors.white}} 
                    onPress={handleSubmit(onSubmit)}
                />
            </View>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
      loadingModal: state.ModalLoadingReducer,
    };
  };
  
  export default connect(mapStateToProps, {
    saveUserToRedux,
  })(MyProfile);
  