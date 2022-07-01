import React from "react"
import {View, Text} from "react-native"
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'

import { ACCEPT, WAIT, REJECT } from '../../Config/constants'
import styles from "./style"

const Letter = (props) => {
    const { optionLetter, time, type, reason, user, status, id } = props
    return (
        <View style={styles.wapperLetter} key={id}>
            <Text style={styles.heading}>{optionLetter}</Text>
            <View style={styles.bodyLetter}>
                <View style={styles.letterItem}>
                    <AntDesign style={styles.letterIcon} name="clockcircleo" size={24} color="black" />
                    <Text style={styles.txtItem}>{time}. {type}</Text>
                </View>
                <View style={styles.letterItem}>
                    <AntDesign style={styles.letterIcon} name="infocirlceo" size={24} color="black" />
                    <Text style={styles.txtItem}>{reason}</Text>
                </View>
                {status === ACCEPT ? (
                    <View style={styles.letterItem}>
                        <Feather style={styles.letterIcon} name="check-circle" size={24} color="black" />
                        <Text style={[styles.txtItem, styles.txtAccept]}>ĐÃ DUYỆT</Text>
                    </View>
                ): <></>
                }
                {status === WAIT ? (
                    <View style={styles.letterItem}>
                        <AntDesign style={styles.letterIcon} name="exclamationcircleo" size={24} color="black" />
                        <Text style={[styles.txtItem, styles.txtWait]}>CHỜ DUYỆT</Text>
                    </View>
                ): <></>
                }
                {status === REJECT ? (
                    <View style={styles.letterItem}>
                        <AntDesign style={styles.letterIcon} name="closecircleo" size={24} color="black" />
                        <Text style={[styles.txtItem, styles.txtReject]}>KHÔNG DUYỆT</Text>
                    </View>
                ): <></>
                }
                <View style={styles.letterItem}>
                    <Feather style={styles.letterIcon} name="user" size={24} color="black" />
                    <Text style={styles.txtItem}>{user}</Text>
                </View>
            </View>

        </View>   
    )
}

export default Letter