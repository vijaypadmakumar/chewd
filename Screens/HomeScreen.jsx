import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from "react-native"
import Button from '../Components/Button';
import Card from '../Components/Card';
import * as RootNavigation from "../RootNavigation"

// TODO
// once the user is verified and is on the home screen
// they should not be allowed to go back to the login pages
// -> try resetting the navigation stack

function HomeScreen() {
    return (
        <View style={styles.container}>
            <Card />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        width: "100%",
        height: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
    }
})

export default HomeScreen;