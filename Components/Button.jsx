import React from 'react';
import { Pressable, Text, StyleSheet, Alert } from 'react-native';
import * as RootNavigation from "../RootNavigation"

function getButtonStyle(buttonType) {
    // returns the button styling based on the title
    switch (buttonType) {
        case "Login":
            return styles.loginButton
        case "Sign Up":
            return styles.registerButton
        case "Continue":
            return styles.continueButton
        case "Next":
            return styles.nextButton
        default:
            return styles.defaultButton
    }
}

function Button(props) {
    const buttonType = getButtonStyle(props.title)
    return (
        // change this -> make a sub component?
        <Pressable style={buttonType} onPress={() => {
            props.isDisabled !== "none" ? RootNavigation.navigate(props.action, null) : Alert.alert("Input Error", "You haven't provided your input details.", [
                {
                    text: "Ok",
                    style: "cancel"
                }
            ])
        }}>
            <Text style={styles.text}>{props.title}</Text>
        </Pressable>
    );
}

export default Button;

const button = StyleSheet.create({
    button: {
        width: 250,
        height: 60,
        borderRadius: 30,
        margin: 10,
    }
})

const styles = StyleSheet.create({
    loginButton: {
        ...button.button,
        backgroundColor: "#FFBF86",
    },
    registerButton: {
        ...button.button,
        backgroundColor: "white",
    },
    continueButton: {
        ...button.button,
        backgroundColor: "grey"
    },
    nextButton: {
        position: "absolute",
        bottom: 20,
        left: 40,
        backgroundColor: "#FDFCE5",
        width: "80%",
        height: 60,
        borderRadius: 25,
        opacity: .8
    },
    defaultButton: {
        ...button.button,
        backgroundColor: "grey"
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        margin: 20,
    },
})