import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import * as RootNavigation from "../RootNavigation"

function Button(props) {

    let buttonType = (props.title === "Login") ? styles.loginButton : styles.registerButton
    return (
        <Pressable style={buttonType} onPress={() => {
            // change to function 
            console.log(props.title + " button clicked")
            RootNavigation.navigate("LoginScreen", null)
        }}>
            <Text style={styles.Text}>{props.title}</Text>
        </Pressable>
    );
}

export default Button;

const styles = StyleSheet.create({
    loginButton: {
        width: 250,
        height: 60,
        backgroundColor: "#FFCE6D",
        borderRadius: 10,
        margin: 10
    },
    registerButton: {
        width: 250,
        height: 60,
        backgroundColor: "#FDFCE5",
        borderRadius: 10,
        margin: 10
    },
    Text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        margin: 20
    }
})