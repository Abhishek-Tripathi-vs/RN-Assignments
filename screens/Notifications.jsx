import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback, FlatList } from 'react-native';
import styles from './Notifications-styles';
import notificationData from "../Data/data.json"
import TopNav from '../components/TopNav';

function Notifications() {
    // State to track elapsed time
    const [elapsedTime, setElapsedTime] = useState(0);

    // Mapping of image names to their respective image paths
    const imagePaths = {
        "Reflection": require("../images/Reflection.png"),
        "Reminder": require("../images/Reminder.png"),
        "D-active": require("../images/D-active.png")
    };

    // State to track which notifications have been clicked
    const [clickedNotifications, setClickedNotifications] = useState(Array(Object.keys(notificationData).length).fill(false));

    // Effect to update elapsed time every minute
    useEffect(() => {
        const interval = setInterval(() => {
            setElapsedTime(prevElapsedTime => prevElapsedTime + 1);
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    // Function to format elapsed time into a human-readable format
    const formatTimeAgo = elapsedTime => {
        if (elapsedTime < 60) {
            return `${elapsedTime}m ago`;
        } else {
            const hours = Math.floor(elapsedTime / 60);
            return `${hours}h ago`;
        }
    };

    // Function to handle click on a notification
    const handleNotificationPress = index => {
        const updatedClickedNotifications = clickedNotifications.map((value, i) => i === index ? true : value);
        setClickedNotifications(updatedClickedNotifications);
    }

    return (
        <View>

            <TopNav title="Notifications" iconSource={require('../images/icons.png')} />
            {/* List of Notifications */}
            <FlatList
                data={notificationData}
                renderItem={({ item, index }) => (
                    <TouchableWithoutFeedback onPress={() => handleNotificationPress(index)}>
                        <View style={clickedNotifications[index] ? styles.clickedNotificationContainer : styles.notificationContainer}>
                            <View style={styles.notificationContent}>
                                <Image style={styles.notificationImage} source={imagePaths[item.name]} />
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

export default Notifications