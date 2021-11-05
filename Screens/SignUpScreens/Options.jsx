import React from 'react';
import { View, Text, StyleSheet, Pressable } from "react-native"
import * as RootNavigation from "../../RootNavigation"

function Options() {
    return (
        <View style={styles.container}>
            <Text>Options Screen</Text>
            <Pressable onPress={() => {
                RootNavigation.navigate("Loading")
            }}>

                <Text>2121</Text>
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        width: "100%",
        height: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
    }
})
export default Options;