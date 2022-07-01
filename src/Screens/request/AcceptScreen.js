import React, {useState, useEffect} from "react"
import {View, Text, ScrollView, FlatList} from "react-native"

import Letter from "../../components/Letter/Letter"
import styles from "../../components/Letter/style"
import { ACCEPT, WAIT, REJECT } from '../../Config/constants'

const AcceptScreen = (props) => {
    const { data, letter, type } = props
    const [list, setList] = useState([])

    const getListLetter = () => {
        if (letter !== undefined)
            setList([...data, letter])
    }
    
    useEffect(() => {
        
        getListLetter()
    }, [letter])

    console.log(list);

    const renderItem = ({ item }) => {
        return (
            item !== null ? (
                <Letter
                    optionLetter={item?.optionLetter}
                    time={item?.time}
                    type={item?.type}
                    reason={item?.reason}
                    status={item?.status}
                    user={item?.user}
                    id={item?.id}
                    keyExtractor={item?.id}
                />

            )   : null
        
        )}

    return (
        <View style={{flex: 1}}>
            {type === WAIT ? 
                <FlatList 
                    data={list}
                    renderItem={renderItem}
                    keyExtractor={item => item?.id}
                />
                : 
                <FlatList 
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            
        
            }

        </View>
    )
}

export default AcceptScreen