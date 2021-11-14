import React, { useState } from "react"
import { View, StyleSheet, ActivityIndicator, Text } from "react-native"
import * as RootNavigation from "../RootNavigation"
import HomeScreen from "./HomeScreen"

function Loading(props) {
    // shown when the client does an api call
    const [fullyLoaded, setFullyLoaded] = useState(false)

    setTimeout(() => {
        setFullyLoaded(true)
    }, 5000)
    return (
        !fullyLoaded ? (
            <View style={styles.container}>
                <Text style={styles.text}>Running the numbers.</Text>
                {/* add some funny text */}
                <ActivityIndicator size="large" color="black" />
            </View>
        ) : <HomeScreen />
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        width: "100%",
        height: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 35,
        color: "#FFCE6D",
        paddingBottom: 50,
    }
})

export default Loading;


