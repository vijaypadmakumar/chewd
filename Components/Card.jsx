import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native"
import { Icon } from 'react-native-elements'
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming, useAnimatedGestureHandler } from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler"

const iconSize = 50

function Card(props) {
    const { name, restaurantName, image } = props.data

    const sharedValue = useSharedValue(1)
    const x = useSharedValue(0)
    const rotate = useSharedValue(0)

    const gestureHandler = useAnimatedGestureHandler({
        onStart: _ => {
            console.log("gesture started")
        },
        onActive: event => {
            console.log("gesture active :" + event.translationX)
        },
        onEnd: _ => {
            console.log("gesture finished")
        },
    })


    const cardStyle = useAnimatedStyle(() => {
        return {
            opacity: sharedValue.value,
            transform: [{ translateX: x.value }, { rotateZ: rotate.value },]
        }
    })

    /*
    Need to move the animation code into HomeScreen
    */

    return (
        // <PanGestureHandler onGestureEvent={gestureHandler}>
        <View style={styles.container}>
            <Animated.View style={[styles.card, cardStyle]}>
                <ImageBackground imageStyle={{ borderRadius: 10 }} style={styles.image} source={{ uri: image }}>
                    <View style={styles.cardDescription}>
                        <Text style={styles.cardHeading}>{`${name} from ${restaurantName}`}</Text>
                    </View>
                </ImageBackground>
            </Animated.View>
        </View >
        // </PanGestureHandler>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        flex: 1,
        alignItems: "center",
    },
    card: {
        width: "95%",
        height: "75%",
        position: "absolute",
        top: 40,
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: .5,
        shadowRadius: 10,
        zIndex: -1
    },
    cardDescription: {
        margin: 20,
        width: "90%",
    },
    image: {
        flex: 1,
        justifyContent: "flex-end",
        borderRadius: 10,
    },
    cardHeading: {
        textAlign: 'left',
        fontWeight: 'bold',
        color: "white",
        fontSize: 25,
        margin: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 10,

    }
})

export default Card;