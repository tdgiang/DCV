import React from "react";
import {View, Text} from "react-native"
import R from "../../assets/R";

import Header from "../../components/Header/Header";
export default (props) => {
    const data = props.route.params
    console.log(data);
    return (
        <View style={{flex: 1}}>
            <Header title="Thông báo" isBack={true} />
            <View style={{flex: 1, paddingHorizontal: 12, backgroundColor: R.colors.white}}>

                <Text style={{marginTop: 24, fontSize: 24, fontWeight: "500"}}>{data.item.title}</Text>
                <View style={{flexDirection: "row", paddingTop: 12}}>
                    <Text>Thời gian: <Text style={{color: "#1b8d06"}}>{data.item.createdAt}</Text></Text>
                    <Text style={{paddingHorizontal: 6}}>|</Text>
                    <Text>Người đăng: <Text style={{color: "#ff6a00"}}>{data.item.userPost}</Text></Text>
                </View>
                <View>
                    <Text style={{marginTop: 16, fontSize: 16, lineHeight: 28}}>
                        {data.item.desc}
                    </Text>
                </View>
            </View>
        </View>
    )
}