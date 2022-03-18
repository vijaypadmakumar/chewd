import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native"


function Card(props) {
    const { name, restaurantName, image_url } = props.data

    return (

        <View style={[styles.card, props.cardStyle]}>
            <ImageBackground imageStyle={{ borderRadius: 10 }} style={styles.image} source={require("../assets/images/loading.gif")}>
                <View style={styles.cardDescription}>
                    <Text style={styles.cardHeading}>{`${name}\n${restaurantName}`}</Text>
                </View>
            </ImageBackground>
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
