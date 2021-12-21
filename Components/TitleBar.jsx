import React from 'react';
import { View, Image, StyleSheet } from "react-native"

function TitleBar(props) {
    return (
        <View style={styles.titleBar}>
            <Image style={styles.brandTitle} source={require("../assets/images/logo.png")} />
        </View>
    );
}

const styles = StyleSheet.create({
    titleBar: {
        width: "100%",
        height: 100,
        backgroundColor: "#CEE5D0",
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: .25,
        shadowRadius: 10,
        flex: .14,
        zIndex: 100,
    },
    brandTitle: {
        marginTop: 50,
        width: 150,
        height: 50,
        alignSelf: "center"
    },
    settingsIcon: {
        position: "absolute",
        marginTop: 55,
        left: 10,
    }
})

export default TitleBar;