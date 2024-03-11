import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
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
    notificationContainer: {
        height: 104,
        backgroundColor: '#F1FCFA',
        borderColor: '#E2E8EB',
        borderWidth: 0.7,
        justifyContent: 'space-around',
    },
    clickedNotificationContainer: {
        height: 104,
        borderColor: '#E2E8EB',
        borderWidth: 0.7,
        justifyContent: 'space-around',
    },
    notificationContent: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    notificationImage: {
        width: 56.2,
        height: 52.43,
    },
    notificationText: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    timerText: {
        color: '#4E5E6C',
        marginLeft: 135,
    },
});

export default styles;
