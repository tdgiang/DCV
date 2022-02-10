import React from 'react'
import { Text, View } from 'react-native'

import Header from '../../components/Header/Header'

function Profile () {
    console.log('My name')
    return (
        <View>
            <Header 
            title="Profile"
            />
            <Text>My name: quàg</Text>
        </View>
        
    )
}

export default Profile