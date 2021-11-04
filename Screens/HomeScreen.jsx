import React from 'react';
import { View, StyleSheet, Text, ScrollView } from "react-native"
import Card from '../Components/Card';
import * as RootNavigation from "../RootNavigation"

// TODO
// once the user is verified and is on the home screen
// they should not be allowed to go back to the login pages
// -> try resetting the navigation stack

let a = []

function HomeScreen() {
    // RootNavigation.navigationRef.resetRoot({
    //     title: "Home",
    //     container: HomeScreen
    // })
    return (
        <View style={styles.container}>
            <ScrollView style={{ margin: 100 }} horizontal={true}>
                <Card />
            </ScrollView>
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
    }
})

export default HomeScreen;