import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableWithoutFeedback, FlatList } from "react-native";
import notificationData from "../../data/data1.json";
import TopNav from "../../components/TopNav";
import styles from "./notifications-styles";
import { formatTimeAgo } from "../../utils/timeUtils";


function NotificationsScreen() {
  const imagePaths = {
    Reflection: require("../../assets/images/Reflection.png"),
    Reminder: require("../../assets/images/Reminder.png"),
    "D-active": require("../../assets/images/dactive.png"),
  };

  const [elapsedTime, setElapsedTime] = useState(0);
  const [clickedNotifications, setClickedNotifications] = useState(
    Array(Object.keys(notificationData).length).fill(false)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleNotificationPress = (index) => {
    const updatedClickedNotifications = clickedNotifications.map((value, i) =>
      i === index ? true : value
    );
    setClickedNotifications(updatedClickedNotifications);
  };

  return (
    <View>
      <TopNav
        title="Notifications"
        iconSource={require("../../assets/images/setting.png")}
      />
      <FlatList
        data={notificationData}
        renderItem={({ item, index }) => (
          <TouchableWithoutFeedback
            onPress={() => handleNotificationPress(index)}
          >
            <View
              style={
                clickedNotifications[index]
                  ? styles.clickedNotificationContainer
                  : styles.notificationContainer
              }
            >
              <View style={styles.notificationContent}>
                <Image
                  style={styles.notificationImage}
                  source={imagePaths[item.name]}
                />
                <View>
                  <Text style={styles.notificationText}>{item.text1}</Text>
                  <Text style={styles.notificationText}>{item.text2}</Text>
                </View>
              </View>
              <Text style={styles.timerText}>{formatTimeAgo(elapsedTime)}</Text>
            </View>
          </TouchableWithoutFeedback>
        )}
      />
    </View>
  );
}
export default NotificationsScreen;
