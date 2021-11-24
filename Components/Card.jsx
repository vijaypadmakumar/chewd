import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native"
import { Icon } from 'react-native-elements'

const iconSize = 50

function Card(props) {
    const url = ["https://www.simplyrecipes.com/thmb/YSlSLYrnOBfkzE3rD_uMSnA8dlA=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Homemade-Pizza-LEAD-3-8aa37af554cf4445a1e3e54fdc66e974.jpg", "https://picsum.photos/seed/1920/1080"]
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <ImageBackground imageStyle={{ borderRadius: 10 }} style={styles.image} source={{ uri: url[0] }}>
                    <View style={styles.cardDescription}>
                        <Text style={styles.cardHeading}>Pizza from PizzaPlace</Text>
                        <View style={styles.likeDislike}>
                            <Icon size={iconSize} name='heart' type='ionicon' color='red' onPress={() => {
                                console.log("like card clicked")
                            }} />
                            <Icon size={iconSize} name='heart-dislike' type='ionicon' color='pink' onPress={() => {
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