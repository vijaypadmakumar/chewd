import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native"
import { Icon } from 'react-native-elements'
import { useAnimatedStyle, useSharedValue } from "react-native-reanimated";

const iconSize = 50

function Card(props) {
    const { name, restaurantName, image } = props.data

    const sharedValue = useSharedValue(0)

    const cartStyle = useAnimatedStyle(() => {
        opacity: sharedValue.value
    })

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <ImageBackground imageStyle={{ borderRadius: 10 }} style={styles.image} source={{ uri: image }}>
                    <View style={styles.cardDescription}>
                        <Text style={styles.cardHeading}>{`${name} from ${restaurantName}`}</Text>
                        <View style={styles.likeDislike}>
                            <Icon size={iconSize} name='heart' type='ionicon' color='red' onPress={() => {
                                console.log("like card clicked")
                            }} />
                            <Icon size={iconSize} name='heart-dislike' type='ionicon' color='lightgrey' onPress={() => {
                                console.log("disklike card clicked")
                            }} />
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </View>
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
        flex: 1
    },
    cardDescription: {
        margin: 20,
        width: "90%",
    },
    image: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
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

    },
    likeDislike: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-around",
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: .3,
        shadowRadius: 10,
    }
})

export default Card;