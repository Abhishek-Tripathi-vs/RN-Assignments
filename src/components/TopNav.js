import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./topNav-styles";
export default function TopNavComponent(props) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.notificationIcon}></View>
      <Text style={styles.headerText}>{props.title}</Text>
      <Image style={styles.notificationIcon} source={props.iconSource} />
    </View>
  );
}
