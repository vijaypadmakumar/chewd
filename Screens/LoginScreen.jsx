import React from "react";
import { View, StyleSheet, Image, TextInput, TouchableWithoutFeedback, Keyboard } from "react-native"
import Button from "../Components/Button";

function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <TextInput style={styles.input} placeholder="Username" />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <TextInput style={styles.input} placeholder="Password" />
            </TouchableWithoutFeedback>
            <Button title="Continue" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#61A6AB",
        width: "100%",
        height: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
    },
    input: {
        width: 250,
        height: 60,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "white"
    }
})

export default LoginScreen;