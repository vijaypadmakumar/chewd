import React from 'react';
import { View, StyleSheet } from "react-native"
import Card from '../Components/Card';
import store from '../store';
import BottomBar from '../Components/BottomBar';
import * as RootNavigation from "../RootNavigation"
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming, useAnimatedGestureHandler } from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler"

// data
import recommendations from '../assets/data/recommendations';
import TitleBar from '../Components/TitleBar';

// TODO 
// once the user is verified and is on the home screen
// they should not be allowed to go back to the login pages
// -> try resetting the navigation stack

function HomeScreen() {

    const translateX = useSharedValue(1)

    const gestureHandler = useAnimatedGestureHandler({
        onStart: _ => {
            console.log("gesture started")
        },
        onActive: event => {
            translateX.value = event.translationX
        },
        onEnd: _ => {
            console.log("gesture finished")
        },
    })


    const cardStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: translateX.value }]
        }
    })

    console.log(store)
    return (
        <View style={styles.container}>
            <TitleBar />
            <PanGestureHandler onGestureEvent={gestureHandler}>
                <Animated.View style={[styles.container, cardStyle]}>
                    <Card data={recommendations[0]} />
                </Animated.View >
            </PanGestureHandler>
            <BottomBar />
        </View >
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
})

export default HomeScreen;