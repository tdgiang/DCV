import {StyleSheet} from "react-native"
import { getFontXD, WIDTHXD, WIDTHXDICON } from "../../Config/Functions";
import R from "../../assets/R";


const styles = StyleSheet.create({
    imgIcon: {
      width: WIDTHXDICON(150),
      height: WIDTHXDICON(150),
    },
    containerItem: {
      width: WIDTHXDICON(170),
      height: WIDTHXDICON(170),
      borderRadius: WIDTHXD(30),
      marginHorizontal: WIDTHXD(20),
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: R.colors.white,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.25,
      shadowRadius: 1.84,
      elevation: 2,
    },
    txtTitle: {
      fontSize: getFontXD(36),
      marginTop: 5,
      textAlign: "center",
      maxWidth: WIDTHXD(220),
    },
    txtHeader: {
      color: R.colors.orange,
      fontSize: getFontXD(36),
      marginTop: 5,
      marginHorizontal: WIDTHXD(40),
      marginVertical: WIDTHXD(40),
    },
    user: {
      flexDirection: "row",
      justifyContent: "space-between"
    },
    imgAvatar: {
      width: 120,
      height: 120,
    },
    name: {
      marginVertical: 20,
      marginHorizontal: 20,
    },
    txtName: {
      fontSize: 18,
      fontWeight: "bold",
      marginTop: 8
    },
    boxJob: {
      marginHorizontal: 20,
      marginBottom: 20
    },
    txtJob: {
      fontSize: 18,
      fontWeight: "bold"
    },
    txtWeek: {
      fontSize: 16,
      fontWeight: "bold",
      marginTop: 10
    },
    wrappDay: {
        backgroundColor: R.colors.white,
        paddingHorizontal: 20,
        paddingVertical: 28,
        borderRadius: 10,
        marginBottom: 10,
        marginRight: 24

    },
    squreStyle: {
      width: "100%",
      height: 160,
      borderRadius: 12,
      backgroundColor: R.colors.main,
    },
    arcStyle: {
      width: "20%",
      height: 70,
      position: "absolute",
      bottom: -25,
      left: "40%",
      borderRadius: 35,
      backgroundColor: R.colors.main,
      transform: [{ scaleX: 5 }, { scaleY: 1 }],
    },
    shadow: {
      shadowColor: "#000",
        shadowOffset: { width: 0, height: 2,},
        shadowOpacity: 0.34,
        shadowRadius: 3.27,
        elevation: 1,
    }
  
  });

  export default styles