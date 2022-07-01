import React, { Component, useState, useEffect, useRef } from "react";
import {
  TextInput,
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Dimensions,
  Keyboard,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
import R from "../../assets/R";
import {
  checkFormatArray,
  getFontXD,
  HEIGHTXD,
  WIDTHXD,
} from "../../Config/Functions";
const { width, height } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";

import {
  REGISTER,
  TABNAVIGATOR,
  FORGOTPASSWORD,
} from "../../routers/ScreenNames";
import I18n from "../../helper/i18/i18n";
import { showAlert, TYPE } from "../../components/DropdownAlert";
import { LoginApi } from '../../apis/user'
import { showLoading, hideLoading } from "../../actions/loadingAction";
import { saveUserToRedux } from "../../actions/users";
import { connect } from "react-redux";
import KEY from "../../assets/AsynStorage";
import AsyncStorage from "@react-native-community/async-storage";
import { useForm, Controller } from "react-hook-form";
import TextForm from "../../components/Input/InputForm";
import AppText from "../../components/AppText";
import Button from "../../components/Button";
import Header from "../../components/Header/Header"
import { upperCase } from "lodash";
import { color } from "react-native-reanimated";

const Login = (props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigation();

  const onSubmit = async (data) => {
    try {
      const response = await LoginApi({ })
      const dataLogin = response.data
      if (response.status === 200) {
        dataLogin.forEach((item) =>  {
          if (item.username == data.username && item.password == data.password) {
            props.saveUserToRedux(item)
            navigate.navigate(TABNAVIGATOR, { item })
          } else {
            Alert.alert(
              'Sai tên tài khoản hoặc mật khẩu'
            )
          }
        })


    }
    } catch (error) {
      console.log(error)
    }
    
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#FDFDFD" }}>
      <Header title="Đăng nhập" />
      <View style={{marginTop: HEIGHTXD(135), paddingHorizontal: 20 }}>
        <View style={{marginBottom: HEIGHTXD(50)}}>
          <Text style={styles.txtHeading}>Chào mừng!</Text>
          <Text style={styles.txtHeading}>Trở lại công ty</Text>
          <Text style={styles.txtHeading}>DCV</Text>
        </View>
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
              title={"password"}
              // placeholder={I18n.t("EnterPass")}
              placeHolderColor='#726D6D'
              placeholder="Mật khẩu"
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

        {/* <View style={styles.row}>
          <View />
          <TouchableOpacity onPress={() => navigate.navigate(FORGOTPASSWORD)}>
            <AppText style={styles.txtTitle} i18nKey={"ForgotPassword"} />
          </TouchableOpacity>
        </View> */}
        {/* <Button
          onPress={() => navigate.navigate(REGISTER)}
          backgroundColor={"#55CEBF"}
          title={I18n.t("Register")}
        /> */}
        <View
          style={{
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <TouchableOpacity onPress={() => navigate.navigate(TABNAVIGATOR)}>
            <AppText style={styles.txtTitle} i18nKey={"GoBackHome"} />
          </TouchableOpacity> */}
          {/* <TouchableOpacity onPress={() => navigate.navigate(TABNAVIGATOR)}>
            <Text>Về trang chủ</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  txtTitle: {
    fontSize: getFontXD(42),
    color: R.colors.white,
    fontWeight: "600",
    marginBottom: 10,
  },

  containerStyle: {
    paddingHorizontal: 2
  },

  txtHeading: {
    fontSize: 30,
    color: '#0E4A86',
    fontWeight: '700',
    marginBottom: 8,
  }

});

const mapStateToProps = (state) => {
  return {
    loadingModal: state.ModalLoadingReducer,
  };
};

export default connect(mapStateToProps, {
  saveUserToRedux,
  showLoading,
  hideLoading,
})(Login);
