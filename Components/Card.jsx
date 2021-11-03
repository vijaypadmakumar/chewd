import React from "react";
import { View, Text, Image, StyleSheet } from "react-native"

function Card(props) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Image style={styles.image} source={{ uri: "https://picsum.photos/seed/picsum/200/300" }} />
                <Text style={styles.text}>Food Name</Text>
                <Text style={styles.text}>Restaurant Name</Text>
                <Text style={styles.text}>Location</Text>
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
        textAlign: "center"
    },
    card: {
        width: "90%",
        height: "70%",
        borderColor: "black",
        borderWidth: 2
    },
    image: {
        width: "100%",
        height: "70%"
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        margin: 20
    }
})

export default Card;