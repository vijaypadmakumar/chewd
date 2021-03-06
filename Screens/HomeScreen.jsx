import React from 'react';
import { View, StyleSheet, Text, ScrollView, Dimensions } from "react-native"
import Card from '../Components/Card';
import * as RootNavigation from "../RootNavigation"
import store from '../store';
import { Icon } from "react-native-elements"
import BottomBar from '../Components/BottomBar';

// TODO
// once the user is verified and is on the home screen
// they should not be allowed to go back to the login pages
// -> try resetting the navigation stack

let a = []

function HomeScreen() {

    console.log(store)
    return (
        <View style={styles.container}>
            <Card />
            <BottomBar />
        </View>
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
    bottomBar: {
        width: "95%",
        height: "8%",
        backgroundColor: "grey",
        opacity: .5,
        borderRadius: 10,
        position: "absolute",
        bottom: 60,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    items: {
        flexDirection: "row",
        paddingLeft: 150
    }
})

export default HomeScreen;