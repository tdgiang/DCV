import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native";

import { ListUserApi, DeleteUserApi } from '../../apis/user'
import {
    ADDUSER,
    UPDATEUSER
} from "../../routers/ScreenNames";
import R from '../../assets/R'

const ListUser = (props) => {

    const navigate = useNavigation();

    const [list, setList] = useState([])

    const getListUser = async () => {
        const res = await ListUserApi({})
        setList(res.data.data.data)
    }
    // getListUser()

    useEffect(() => {
        getListUser()
    }, [])

    const handleEditUser = (item) => {
        navigate.navigate(UPDATEUSER, { getListUser,  item})
    }
    const handleDeleteUser = async (index) => {
        const res = await DeleteUserApi({"id": index})
        getListUser()

        console.log(res);
        
    }

    const renderItem = (item) => {
        return (
            <View style={styles.user}>
                <View style={styles.userBox}>
                    <Image 
                        style={styles.avatar}
                        source={require('../../assets/images/avatar.jpg')} 
                    />
                    <View>
                        <Text>{item.item.full_name}</Text>
                        <Text>{item.item.email}</Text>
                    </View>
                </View>
                <View style={styles.options}>
                    <TouchableOpacity onPress={() => handleEditUser(item.item)}>
                        <Text style={{color: R.colors.main, fontWeight: "bold"}}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleDeleteUser(item.item.id)}>
                        <Text style={{color: R.colors.accent, fontWeight: "bold"}}>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={{marginTop: 64, paddingHorizontal: 32, flex: 1}}>
            <Text style={{fontSize: 24, textAlign: "center",marginBottom: 12}}>Danh sách nhân viên</Text>
            <FlatList 
                data={list}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={(item) => renderItem(item)}
            />
            <TouchableOpacity style={styles.plus} onPress={() => navigate.navigate(ADDUSER, {getListUser})}>
                <Text style={{fontSize: 40, color: '#fff'}}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    user: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 12,
        marginBottom: 12,
        backgroundColor: '#fff'
    },
    userBox: {
        flexDirection: "row",
        alignItems: "center"
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginBottom: 12,
        marginRight: 12
    },
    options: {
        justifyContent: "center",
        // marginTop: 32
    },
    // userBox: {
    //     borderWidth: 0.5,
    //     borderColor: '#ccc',
    // }
    plus: {
        width: 80,
        height: 80,
        backgroundColor: '#ccc',
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 100,
        right: 30

    }
})

export default ListUser