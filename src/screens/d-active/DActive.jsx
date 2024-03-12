import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  FlatList,
} from "react-native";
import TopNav from "../../components/TopNav";
import list from "../../data/data2.json";
import styles from "./dActive-styles";
export default function DActive() {
  const imagePaths = {
    "Outer Ring": require("../../assets/images/outerring.png"),
    Focus: require("../../assets/images/focus.png"),
    Follow: require("../../assets/images/follow.png"),
    Scan: require("../../assets/images/scan.png"),
    Square: require("../../assets/images/square.png"),
  };

  return (
    <View>
      <TopNav
        title="D-active"
        iconSource={require("../../assets/images/vector.png")}
      />
      <View>
        <FlatList
          data={list}
          renderItem={({ item }) => {
            return (
              <View style={styles.listContainer}>
                <ImageBackground
                  source={imagePaths[item.title]}
                  style={styles.bgImage}
                >
                  <View style={styles.innerContainer}>
                    <View style={styles.textContainer}>
                      <Text style={[styles.text, { color: item.color }]}>
                        {item.title}
                      </Text>
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
    </View>
  );
}
