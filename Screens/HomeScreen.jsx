import React from 'react';
import { View, StyleSheet, Dimensions, useWindowDimensions } from "react-native"
import Card from '../Components/Card';
import store from '../store';
import BottomBar from '../Components/BottomBar';
import * as RootNavigation from "../RootNavigation"
import Animated, {
    useAnimatedStyle, useSharedValue, withSpring, withTiming, useAnimatedGestureHandler, useDerivedValue, interpolate
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler"

// data
import recommendations from '../assets/data/recommendations';
import TitleBar from '../Components/TitleBar';

// TODO 
// once the user is verified and is on the home screen
// they should not be allowed to go back to the login pages
// -> try resetting the navigation stack

function HomeScreen() {

    const { width } = useWindowDimensions()

    const translateX = useSharedValue(0)
    const rotate = useDerivedValue((x) => {
        return interpolate(
            translateX.value,
            [0, width],
            [0, 30]
        ) + "deg"
    })

    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, context) => {
            console.log("gesture started")
            context.startX = translateX.value
        },
        onActive: (event, context) => {
            translateX.value = event.translationX + context.startX
        },
        onEnd: (_, context) => {
            console.log("gesture finished")
        },
        onCancel: (_) => {
            translateX.value = withSpring(0)
        }
    })


    const cardStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: translateX.value
                },
                {
                    rotate: rotate.value
                }
            ]
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
    animatedCard: {
        width: "95%",
        height: "75%",
    }
})

export default HomeScreen;