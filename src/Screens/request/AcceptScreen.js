import React from "react"
import {View, Text, ScrollView, FlatList} from "react-native"

import Letter from "../../components/Letter/Letter"
import styles from "../../components/Letter/style"
import { ACCEPT, WAIT, REJECT } from '../../Config/constants'

const AcceptScreen = (props) => {
    const { data } = props

    const renderItem = ({ item }) => {
        return (
            <Letter
                optionLetter={item.optionLetter}
                time={item.time}
                type={item.type}
                reason={item.reason}
                status={item.status}
                user={item.user}
            />
        )}

    return (
        <FlatList 
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    )
}

export default AcceptScreen