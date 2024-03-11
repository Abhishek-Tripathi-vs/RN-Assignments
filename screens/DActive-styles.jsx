import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    listContainer: {
      borderRadius: 16,
    },
    bgImage: {
      height: 148,
      borderRadius: 100,
      margin: 20,
    },
    innerContainer: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      flex: 1
    },
    textContainer: {
      height: 41,
    },
    text: {
      fontSize: 18,
      fontWeight: '700',
      lineHeight: 25.2
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'flex-end' ,
      height: 60,
      width: '100%'
    },
    button: {
      height: 36,
      width: 93,
      borderRadius: 8,
      backgroundColor: "#FFFFFF",
      // paddingVertical: 10,
      // paddingHorizontal: 14,
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 16,
      elevation: 3,
      shadowColor: '#4B4B4B',
      shadowOpacity: 6,
      gap: 8,
      textAlign: 'center'
    },
    buttonText: {
      fontSize: 12,
      fontWeight: '700',
      lineHeight: 18,
      color: '#292F36',
    }
  });

export default styles;