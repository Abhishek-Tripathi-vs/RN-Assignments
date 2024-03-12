import React from "react";
import { View, Text, Image } from "react-native";
import TopNav from "../../components/TopNav";
import styles from "./notificationsNone-styles";
const bell = require("../../assets/images/bell.png");
export default function NotificationsNoneScreen() {
  return (
    <View style={styles.container}>
      <TopNav
        title="Notifications"
        iconSource={require("../../assets/images/setting.png")}
      />
      <View style={styles.card}>
        <Image source={bell} style={styles.cardImage} />
        <View>
          <Text style={styles.cardHeading}>No Notifications Yet!</Text>
          <Text style={styles.cardText}>
            You have no notifications right now.
          </Text>
          <Text style={styles.cardText}>Come back later.</Text>
        </View>
      </View>
    </View>
  );
}
