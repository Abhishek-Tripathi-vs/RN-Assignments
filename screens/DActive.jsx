import {
    FlatList,
    ImageBackground,
    Pressable,
    SafeAreaView,
    Text,
    View,
} from 'react-native';
import React from 'react';
import TopNav from '../components/TopNav';
import list from '../Data/data2.json'
import styles from './DActive-styles';

export default function DActive() {
    const imagePaths = {
        "Outer Ring": require('../images/scene1.png'),
        "Focus": require('../images/scene2.png'),
        "Follow": require('../images/scene3.png'),
        "Scan": require('../images/scene4.png'),
        "Square": require('../images/scene5.png'), // Corrected the path
    };

    return (
        <SafeAreaView>
            <TopNav title="D-active" iconSource={require('../images/Vector.png')} />

            <View>
                <FlatList
                    data={list}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.listContainer}>
                                <ImageBackground source={imagePaths[item.title]} style={styles.bgImage}>
                                    <View style={styles.innerContainer}>
                                        <View style={styles.textContainer}>
                                            <Text style={[styles.text, { color: item.color }]}>{item.title}</Text>
                                        </View>
                                        <View style={styles.buttonContainer}>
                                            <Pressable style={styles.button}>
                                                <Text style={styles.buttonText}>2 min</Text>
                                            </Pressable>
                                            <Pressable style={styles.button}>
                                                <Text style={styles.buttonText}>4 min</Text>
                                            </Pressable>
                                            <Pressable style={styles.button}>
                                                <Text style={styles.buttonText}>8 min</Text>
                                            </Pressable>
                                        </View>
                                    </View>
                                </ImageBackground>
                            </View>
                        );
                    }}
                    keyExtractor={(item, index) => item.id.toString()}
                />
            </View>
        </SafeAreaView>
    );
}
