import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from "react-native"
import * as RootNavigation from "../../RootNavigation"
import { Slider } from 'react-native-elements';

function Options() {

    const [currentValue, setCurrentValue] = useState(0)

    return (
        <View style={styles.container}>
            <Text>Current Value : {currentValue.toFixed(0)}</Text>
            <Slider
                style={{ width: 200, height: 40 }}
                minimumValue={2}
                maximumValue={6}
                value={currentValue}
                thumbTintColor="dodgerblue"
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#000000"
                onSlidingComplete={(value) => {
                    setCurrentValue(value)
                }}
            />
            <Pressable style={styles.button} onPress={() => {
                RootNavigation.navigate("Loading")
            }}>

                <Text style={styles.text}>Next</Text>
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
    },
    button: {
        position: "absolute",
        bottom: 20,
        left: 40,
        backgroundColor: "#FDFCE5",
        width: "80%",
        height: 60,
        borderRadius: 25,
        opacity: .9
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        margin: 20,
    }
})
export default Options;