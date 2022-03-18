import React from "react";
import { View, StyleSheet, Image } from "react-native"
import Button from "../Components/Button";

function MainScreen() {

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../assets/images/logo.png")} />
            <Button title="Login" action="Login" />
            <Button title="Sign Up" action="Option" />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#CEE5D0",
        width: "100%",
        height: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
    },
    image: {
        borderRadius: 200,
        width: 400,
        height: 400,
    }
})

export default MainScreen;