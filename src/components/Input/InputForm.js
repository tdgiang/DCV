import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { HEIGHTXD, WIDTHXD, getFontXD } from "../../Config/Functions";
import R from "../../assets/R";
import I18n from "../../helper/i18/i18n";

import Icon from "react-native-vector-icons/Feather";



const TextField = (props) => {
  const {
    title,
    onChangeText,
    isPassword,
    maxLength,
    isNumber,
    value,
    editable,
    error,
    onBlur,
    placeholder,
    keyboardType,
    placeHolderColor,
    textColor,
    tinColor,
    fontSize,
    containerStyle
  } = props;

  const [showPassword, setShowPassword] = useState(false)

  return (
    <View>
      <TextInput
        onBlur={onBlur}
        maxLength={maxLength ? maxLength : 256}
        placeholderTextColor={placeHolderColor}
        editable={editable != null ? editable : true}
        placeholder={placeholder}
        secureTextEntry={isPassword && !showPassword}
        autoCapitalize="none"
        value={value}
        fontSize={24}
        keyboardType={keyboardType}
        onChangeText={(val) => onChangeText(val)}
        style={[{
          // height: HEIGHTXD(60),
          // color: textColor,
          // color: 'red',
          // borderBottomWidth: 1,
          // borderRadius: 15,
          fontSize: fontSize ? fontSize : getFontXD(42),
          paddingVertical: 20,
          paddingHorizontal: 20,
          backgroundColor: R.colors.bgcInput,
          borderRadius: 20,

          // borderBottomColor: "#80E0FF",
        },
        {...containerStyle}
      ]}

      />
        {isPassword && <TouchableOpacity style={{position: 'absolute', right: 17, top: 20}}
           onPress={() => setShowPassword(!showPassword)}
        >
          <Icon name={showPassword ? 'eye' : 'eye-off'} size={20} color={'#4B4B4B'}/>
        </TouchableOpacity>
        }

      <View
        style={{
          height: 20,
          marginTop: 5,
          paddingHorizontal: 5,
        }}
      >
        {error && (
          <Text
            style={{
              color: tinColor ? tinColor : "red",
              fontSize: getFontXD(32),
            }}
          >
            {/* {I18n.t("PleaseEnterField")} */}
            Vui lòng nhập trường này!
          </Text>
        )}
      </View>
    </View>
  );
};

export default React.memo(TextField);
