import React from "react";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import { useNavigation } from "@react-navigation/native";

import images from "../../assets/images";
import R from "../../assets/R";
import { NOTIFICATIONDETAIL } from '../../routers/ScreenNames'

export const listNotifi = [
    {
        id: 0,
        title: "Bạn đã được duyệt đơn xin nghỉ",
        createdAt: '2 giờ trước',
        desc: "Đơn xin nghỉ của bạn đã được duyệt, vui lòng chuyển tới trang Đơn từ để biết thêm chi tiết!",
        userPost: 'Ban lãnh đạo',
    },
    {
        id: 1,
        title: "Cập nhật tình hình covid",
        createdAt: '1 giờ trước',
        desc: "Phó thủ tướng Vũ Đức Đam giao Bộ Y tế nghiên cứu tiêm vaccine mũi 4 cho lực lượng tuyến đầu đã suy giảm miễn dịch và đánh giá miễn dịch cộng đồng để có giải pháp phù hợp. Ngày 23/5, Phó thủ tướng Vũ Đức Đam nêu rõ, Chính phủ đã có chỉ đạo cụ thể về mục tiêu cần đạt được trong việc tiêm vaccine Covid-19 mũi ba cho người từ 18 tuổi, nhưng tiến độ còn chậm Để đảm bảo mục tiêu đề ra, Bộ Y tế cần phối hợp với Văn phòng Chính phủ rà soát số người từ 18 tuổi chưa tiêm vaccine mũi ba; đề xuất giải pháp đẩy nhanh tiến độ tiêm cho những người này; báo cáo Phó thủ tướng trước 25/5",
        userPost: 'Ban truyền thông',
    },
    {
        id: 2,
        title: "Thông báo lịch nghỉ họp các phòng ban",
        createdAt: '2 ngày trước',
    },
    {
        id: 3,
        title: "Cập nhật chính sách mới",
        createdAt: '3 ngày trước',
    },
    {
        id: 4,
        title: "Thông báo lịch nghỉ tết",
        createdAt: '2 tháng trước',
    },
    {
        id: 5,
        title: "Bạn đã được duyệt đơn xin nghỉ",
        createdAt: '2 ngày trước',
    },
]

const NotificationItem = (props) => {
  const navigation = useNavigation();


    const renderItem = ({item}) => {
        return (
            <TouchableOpacity style={{
                flexDirection: "row", 
                justifyContent: "space-between", 
                backgroundColor: R.colors.white, 
                paddingHorizontal: 24, 
                paddingVertical: 16, 
                alignItems: "center",
                marginBottom: 4
            }}
                onPress={() => navigation.navigate(NOTIFICATIONDETAIL, {item})}
            >
                <View style={{flexDirection: "row", alignItems: "center", flex: 8}}>
                    <Image 
                        source={images.notifi}
                        style={{width: 70, height: 70, borderRadius: 100}}
                    />

                    <View style={{marginLeft: 8}}>
                        <Text style={{fontSize: 18}}>{item.title}</Text>
                        <Text style={{color: R.colors.txtGray, marginTop: 8}}>{item.createdAt}</Text>
                    </View>

                </View>
                <TouchableOpacity style={{flex: 3, flexDirection:"row-reverse"}}>
                    <SimpleLineIcons style={styles.icon} name="options-vertical" size={18} color="black" />
                </TouchableOpacity>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{flex: 1}}>
            <FlatList 
                data={listNotifi}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
            />

            

        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {

    },
})

export default NotificationItem