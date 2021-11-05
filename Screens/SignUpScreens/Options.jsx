import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from "react-native"
import { ButtonGroup } from 'react-native-elements/dist/buttons/ButtonGroup';
import * as RootNavigation from "../../RootNavigation"

function Options() {

    return (
        <View style={styles.container}>
            <Text>Options Screen</Text>
            <Pressable style={styles.button} onPress={() => {
                RootNavigation.navigate("Loading")
            }}>

                <Text style={styles.text}>Continue</Text>
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