// styles.js
import { StyleSheet } from "react-native";
import * as colors from "../../theme/colors";

const styles = StyleSheet.create({
  notificationContainer: {
    height: 104,
    backgroundColor: colors.notificationBackground,
    borderColor: colors.notificationBorder,
    borderWidth: 0.7,
    justifyContent: "space-around",
  },
  clickedNotificationContainer: {
    height: 104,
    borderColor: colors.notificationBorder,
    borderWidth: 0.7,
    justifyContent: "space-around",
  },
  notificationContent: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  notificationImage: {
    width: 56.2,
    height: 52.43,
  },
  notificationText: {
    fontWeight: "bold",
    fontSize: 14,
    fontFamily: "Quicksand",
  },
  timerText: {
    color: colors.timerTextColor,
    marginLeft: 135,
  },
});

export default styles;
