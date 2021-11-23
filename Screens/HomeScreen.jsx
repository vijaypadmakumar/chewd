import React from 'react';
import { View, StyleSheet, Text } from "react-native"
import Card from '../Components/Card';
import store from '../store';
import BottomBar from '../Components/BottomBar';

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
                <Text style={styles.brandTitle}>Chewd</Text>
            </View>
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
    },
    titleBar: {
        width: "100%",
        height: 100,
        backgroundColor: "white",
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: .1,
        shadowRadius: 10,
    },
    brandTitle: {
        textAlign: 'center',
        marginTop: 50,
        fontSize: 28,
        fontWeight: "bold"
    }
})

export default HomeScreen;