import React, { useState } from "react";
import { View, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard, Text, Alert } from "react-native"
import Button from "../Components/Button";
import Help from "../Components/Help";
import store from "../store";

function LoginScreen() {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome back!</Text>
            <View onPress={Keyboard.dismiss}>
                <TouchableWithoutFeedback >
                    <TextInput style={styles.input} placeholder="Username" onChangeText={text => {
                        setUserName(text)
                        store["username"] = text
                    }} value={userName} />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <TextInput style={styles.input} secureTextEntry={true} placeholder="Password" onChangeText={text => {
                        setPassword(text)
                        store["password"] = text
                    }} value={password} />
                </TouchableWithoutFeedback>
            </View>
            <Help helpTitle="Forgot details?" />
            <Button isDisabled={
                (userName === "" || password === "") ? "none" : null
            } title="Continue" action="Home" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F3F0D7",
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
        padding: 10,
        borderRadius: 30,
        backgroundColor: "white",
        borderColor: "white"
    },
    text: {
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 50,
        paddingBottom: 20,
        color: "black"
    }
})

export default LoginScreen;