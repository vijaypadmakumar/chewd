import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Keyboard, Alert, TouchableWithoutFeedback } from "react-native"
import Button from '../../Components/Button';
import * as RootNavigation from "../../RootNavigation"
import store from '../../store';

/**
 * This function will return a render method
 * This will render the full name, phone number, email id and password inputs
 * TODO
 * Need to redo this whole thing
 * @param {*} props 
 * @returns SignUpPageDetails
 */

function SignUpPageDetails() {
    // change to object hook thing
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function verifyAndSetEmail(emailProvied) {
        // check if the email provided is a valid one otherwise 
        // const isValidEmail = (emailProvied) => {
        //     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //     return re.test(String(emailProvied).toLowerCase());
        // }
        // isValidEmail() ? setEmail(emailProvied) : (
        //     Alert.alert("Email Error", "The email you've provied doesn't seem to be valid", [
        //         {
        //             text: "Ok",
        //             style: "cancel",
        //         }
        //     ])
        // )
        // console.log(isValidEmail)
        console.log(emailProvied)
    }

    function verifyAndSetPassword() {
        // check password and set
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Text style={styles.text}>Let's get you signed up!</Text>
                <TextInput onPressOut={Keyboard.dismiss} placeholder="Name" style={styles.input} onChangeText={(fullName) => {
                    setFullName(fullName)
                    store["fullName"] = fullName

                }} value={fullName} />
                <TextInput onEndEditing={verifyAndSetEmail(email)} placeholder="Email Address" style={styles.input} onChangeText={(email) => setEmail(email)} value={email} />
                <TextInput placeholder="Password" style={styles.input} secureTextEntry={true} onChangeText={(text) => {
                    setPassword(text)
                }} value={password} />
                <Button title="Next" action="SignUpPageTwo" />
            </View >
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffce6d",
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
        borderRadius: 30,
        backgroundColor: "white",
        borderColor: "white"
    },
    text: {
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 35,
        margin: 20,
        color: "#0f060b",
        paddingLeft: 10,
        paddingRight: 10,
    },
    alertText: {
        textAlign: 'center',
        fontSize: 18,
        color: "red",
        paddingLeft: 10,
        paddingRight: 10,

    }
})

export default SignUpPageDetails;