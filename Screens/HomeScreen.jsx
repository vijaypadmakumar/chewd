import React, { useEffect, useState } from 'react';
import { View, StyleSheet, useWindowDimensions } from "react-native"
import Card from '../Components/Card';
import store from '../store';
import BottomBar from '../Components/BottomBar';
import * as RootNavigation from "../RootNavigation"
import Animated, {
    useAnimatedStyle, useSharedValue, withSpring, useAnimatedGestureHandler, useDerivedValue, interpolate, runOnJS
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler"

// data
import recommendations from '../assets/data/recommendations';
import TitleBar from '../Components/TitleBar';

function resetNavigationStack() {
    console.info("NEED TO RESET STACK SO USER CANNOT GO BACK AFTER LOGIN/SIGNUP")
}


// TODO 
// once the user is verified and is on the home screen
// they should not be allowed to go back to the login pages
// -> try resetting the navigation stack

function HomeScreen() {

    resetNavigationStack()

    const { width } = useWindowDimensions()
    const ROTATION = 60
    const hideTranslateX = width * 2
    const swipeVelocity = 600

    const [currentIndex, setCurrentIndex] = useState(0)
    const [nextIndex, setNextIndex] = useState(currentIndex + 1)

    const currentRecommendation = recommendations[currentIndex]
    const nextRecommendation = recommendations[nextIndex]


    const translateX = useSharedValue(0)

    // rotate is dependent on the translateX of gesture handler
    // bigger translateX means more rotate and vice versa
    const rotate = useDerivedValue(_ => {
        return interpolate(
            translateX.value,
            [0, hideTranslateX],
            [0, ROTATION]
        ) + "deg"
    })

    /*
    This gesture handler handles the rotation and translation of the card on top.
    */
    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, context) => {
            context.startX = translateX.value
        },
        onActive: (event, context) => {
            translateX.value = event.translationX + context.startX
        },
        onEnd: (event) => {
            const degree = parseFloat(rotate.value.slice(0, 5))


            if (degree >= 16 || event.velocityX >= swipeVelocity) {
                // recommendation liked
                console.log("like")
                translateX.value = withSpring(hideTranslateX)

                runOnJS(setCurrentIndex)(currentIndex + 1)


            } else if (degree <= -16 || Math.abs(event.velocityX) >= swipeVelocity) {
                // recommendation disliked
                console.log("dislike")
                translateX.value = withSpring(-hideTranslateX)

                runOnJS(setCurrentIndex)(currentIndex + 1)

            } else if (degree <= 16 && degree >= -16) {
                // recommendation undecided
                console.log("undecided")
                translateX.value = withSpring(0)
            }
        }
    })

    useEffect(() => {
        // once the card is removed from the screen
        // resetting translateX will bring the 
        setNextIndex(currentIndex + 1)
        translateX.value = 0
    }, [currentIndex])

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

    const nextCardStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(
                translateX.value,
                [-hideTranslateX / 2, 0, hideTranslateX / 2],
                [1, 0.7, 1]
            ),
            transform: [
                {
                    scale: interpolate(
                        translateX.value,
                        [-hideTranslateX / 2, 0, hideTranslateX / 2],
                        [1, 0.85, 1],
                    )
                },

            ]
        }
    })

    console.log(store)
    return (
        <View style={styles.container}>
            <TitleBar />
            <Animated.View style={[styles.nextCardContainer, nextCardStyle]}>
                <Card data={nextRecommendation} />
            </Animated.View>
            <PanGestureHandler onGestureEvent={gestureHandler}>
                <Animated.View style={[styles.currentCard, cardStyle]}>
                    <Card data={currentRecommendation} />
                </Animated.View >
            </PanGestureHandler>
            <BottomBar />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
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
    nextCardContainer: {
        ...StyleSheet.absoluteFillObject,
        alignItems: "center",
        justifyContent: 'center',
        position: "absolute",
        width: "95%",
        height: "75%",
        top: 115
    },
    currentCard: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
    }
})

export default HomeScreen;