import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import * as RootNavigation from "../RootNavigation"

function Button(props) {

    // this is done to change styles depending on the button type
    // is there another way to do it?
    let buttonType = (props.title === "Login") ? styles.loginButton : styles.registerButton

    return (
        <Pressable style={buttonType} onPress={() => {
            console.log(props.title + " button clicked" + " action " + props.action)

            /*
            wasn't able to access the naviagtion property
            using this navigate function 
                with params (route, data)
                each button has an attribute named action
                action gives the next screen route name
            */
            RootNavigation.navigate(props.action, null)
        }}>
            <Text style={styles.text}>{props.title}</Text>
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
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        margin: 20
    }
})