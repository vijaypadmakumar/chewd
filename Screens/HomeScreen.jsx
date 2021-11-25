import React from 'react';
import { View, StyleSheet, Image } from "react-native"
import { Icon } from 'react-native-elements'
import Card from '../Components/Card';
import store from '../store';
import BottomBar from '../Components/BottomBar';
import * as RootNavigation from "../RootNavigation"

// data
import recommendations from '../assets/data/recommendations';

// TODO
// once the user is verified and is on the home screen
// they should not be allowed to go back to the login pages
// -> try resetting the navigation stack

// change the title bar to a seperate component

function HomeScreen() {

    console.log(store)
    return (
        <View style={styles.container}>
            <View style={styles.titleBar}>
                <Image style={styles.brandTitle} source={require("../assets/images/logo.png")} />
            </View>
            <Card data={recommendations[0]} />
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
    },
    titleBar: {
        width: "100%",
        height: 100,
        backgroundColor: "#CEE5D0",
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: .25,
        shadowRadius: 10,
        flex: .14,
    },
    brandTitle: {
        marginTop: 50,
        width: 150,
        height: 60,
        alignSelf: "center"
    },
    settingsIcon: {
        position: "absolute",
        marginTop: 55,
        left: 10,
    }
})

export default HomeScreen;