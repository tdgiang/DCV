import {StyleSheet} from "react-native"
import R from "../../assets/R"

const styles = StyleSheet.create({
    wapperLetter: {
        // paddingTop: 8,
        borderLeftColor: R.colors.main,
        borderLeftWidth: 5,
        marginBottom: 4
    },
    heading: {
        padding: 4,
        paddingLeft: 18,
        fontSize: 18,
        fontWeight: "bold",
        backgroundColor: '#F7F7F7'
    },
    bodyLetter: {
        backgroundColor: '#fff',
        paddingLeft: 18,
        paddingTop: 12
    },
    letterItem: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8
    },
    txtItem: {
        fontSize: 16,
        fontWeight: '500'
    },
    letterIcon: {   
        marginRight: 6
    },
    txtAccept: {
        color: R.colors.main,
        fontWeight: "bold"
    },
    txtWait: {
        color: R.colors.corlor9c,
        fontWeight: "bold"
    },
    txtReject: {
        color: R.colors.colorTuChoi,
        fontWeight: "bold"
    },
    
})

export default styles