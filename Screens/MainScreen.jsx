import React from "react";
import { View, Pressable, StyleSheet, Text, Image } from "react-native"
import Button from "../Components/Button";

function MainScreen() {

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../assets/Images/Logo.png")} />
            <Button title="Login" action="Login" />
            <Button title="Sign Up" action="SignUpPageOne" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        width: "100%",
        height: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
    },
    image: {
        borderRadius: 100,
        width: 200,
        height: 200,
        margin: 100,
    }
})

export default MainScreen;