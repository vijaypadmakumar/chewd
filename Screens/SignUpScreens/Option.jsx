/**
 * This screen would show google sign up and create an account using email
 */

import React from 'react';
import { View, StyleSheet } from "react-native"

import Button from '../../Components/Button';

function Option(props) {
    return (
        <View style={styles.container}>
            <Button title="Continue with Google" action="SignUpPageTwo" />
            <Button title="Continue with email" action="SignUpPageOne" />
        </View>
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
    }
})
export default Option;