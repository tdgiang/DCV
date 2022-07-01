import { get } from 'lodash'
import { StyleSheet } from 'react-native'
import R from '../../assets/R'
import { getFontXD, HEIGHT, WIDTH } from '../../Config/Functions'

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 10
    },
    checkIn: {
        paddingVertical: 20,
        backgroundColor: R.colors.white,
        paddingLeft: 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.89,
        marginBottom: 6
    },
    checkInText: {
        fontSize: getFontXD(48),
        color: R.colors.main,
        fontWeight: 'bold'
    },
    line: {
        position: 'relative',
        top: 20,
        left: -16,
        width: WIDTH(100),
        height: HEIGHT(3),
        backgroundColor: R.colors.main,
        borderRadius: 4,

    },
    checkDate: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 16,
        backgroundColor: R.colors.white,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.89,
        
    },
    checkDateItem: {

    },
    txtDate: {
        fontSize: getFontXD(42),
        fontWeight: 'bold',
        paddingBottom: 8
    },
    icon: {
        color: '#C4C4C4'
    },  
    numberDate: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: getFontXD(58)
    },
    numberWorkDay: {
        color: R.colors.main
    },
    numberLate: {
        color: R.colors.colorf39
    },
    numberQuit: {
        color: "#DB2F09"
    },
    checkInSchedule: {
        marginVertical: 28,
        paddingLeft: 12
    },
    headingSchedule: {
        fontSize: getFontXD(42),
        fontWeight: 'bold',
        marginBottom: 10
    },
    scheduleDesc: {
        fontSize: getFontXD(38)
    },
    getMonth: {
        paddingLeft: 12,
        fontSize: getFontXD(38),
        fontWeight: 'bold'
    },
    checkinDetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12
    },
    leftDetail: {
        padding: 12,
        backgroundColor: '#ECECEC',
        borderRadius: 10,
        alignItems: 'center'
    },
    dateDetail: {
        fontSize: getFontXD(38),
        fontWeight: 'bold'
    },
    rightDetail: {
        padding: 12,
    },
    checkTimeDetail: {
        fontSize: getFontXD(42),
        fontWeight: 'bold',

    },
    checkIcon: {
    }
})

export default styles