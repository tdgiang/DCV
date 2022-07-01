import React from "react";
import { View, Text } from 'react-native'
import { WebView } from "react-native-webview"

import Header from "../../components/Header/Header";

export default () => {
    return (
        <View style={{flex: 1}}>
            <WebView
                source={{
                uri: 'https://dcv.vn/contact/'
                }}
                style={{ marginTop: 40 }}
            />
        </View>
    )
}