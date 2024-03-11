import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function TopNav(props) {
    return (
        // Header
        <View>
            <View style={styles.headerContainer}>
                {/* Notification Icon */}
                <View style={styles.notificationIcon}></View>
                {/* Header Text */}
                <Text style={styles.headerText}>{props.title}</Text>
                {/* Another Notification Icon */}
                <Image style={styles.notificationIcon} source={props.iconSource} />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 56,
        alignItems: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'Fraunces',
    },
    notificationIcon: {
        height: 24,
        width: 24,
    },
})
