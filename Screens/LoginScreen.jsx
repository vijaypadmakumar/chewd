import React, { useState } from "react";
import { View, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard, Text } from "react-native"
import Button from "../Components/Button";

function LoginScreen({ navigation }) {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome back!</Text>
            <View onPress={Keyboard.dismiss}>
                <TouchableWithoutFeedback >
                    <TextInput style={styles.input} placeholder="Username" onChangeText={text => setUserName(text)} value={userName} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <TextInput style={styles.input} secureTextEntry={true} placeholder="Password" onChangeText={text => setPassword(text)} value={password} />
                </TouchableWithoutFeedback>
            </View>
            <Button title="Continue" action="Home" />
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
        backgroundColor: "white",
        borderColor: "white"
    },
    text: {
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 35,
        color: "#FFCE6D",
        paddingBottom: 50
    }
})

export default LoginScreen;