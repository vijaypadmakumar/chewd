import React from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native"

function Card(props) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                {/* change the images to  */}
                <ImageBackground imageStyle={{ borderRadius: 10 }} style={styles.image} source={{ uri: "https://picsum.photos/seed/picsum/1920/1080" }}>
                    <View style={styles.cardDescription}>
                        <Text style={styles.cardHeading}>Restaurant name</Text>
                        <Text style={styles.cardBody}>Food Item</Text>
                        <Text style={styles.cardBody}>Item Description</Text>
                        <Text style={styles.cardBody}>Location</Text>
                    </View>
                </ImageBackground>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        width: "100%",
        height: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        textAlign: "center",

    },
    card: {
        width: "95%",
        height: "70%",
        position: "absolute",
        top: 120,
    },
    cardDescription: {
        opacity: .8,
        backgroundColor: "white",
        borderRadius: 10,
        margin: 20,
        width: "90%"
    },
    image: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        borderRadius: 10,
    },
    cardBody: {
        textAlign: 'left',
        color: "black",
        fontSize: 15,
        margin: 5,
        marginLeft: 20,
    },
    cardHeading: {
        textAlign: 'left',
        fontWeight: 'bold',
        color: "black",
        fontSize: 25,
        margin: 5,
        marginLeft: 20,
    }
})

export default Card;