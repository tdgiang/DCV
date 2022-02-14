import React from "react";
import { View, Text, TextInput } from "react-native";
import { HEIGHTXD, WIDTHXD, getFontXD } from "../../Config/Functions";
import R from "../../assets/R";
import I18n from "../../helper/i18/i18n";

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
  } = props;

  return (
    <View>
      <TextInput
        onBlur={onBlur}
        maxLength={maxLength ? maxLength : 256}
        placeholderTextColor={'#3C3C3C'}
        editable={editable != null ? editable : true}
        placeholder={placeholder}
        secureTextEntry={isPassword}
        autoCapitalize="none"
        value={value}
        fontSize={24}
        keyboardType={keyboardType}
        onChangeText={(val) => onChangeText(val)}
        style={{
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
        }}
      />
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
              color: tinColor ? tinColor : "#ffc700",
              fontSize: getFontXD(32),
            }}
          >
            {I18n.t("PleaseEnterField")}
          </Text>
        )}
      </View>
    </View>
  );
};

export default React.memo(TextField);
