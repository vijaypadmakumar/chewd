import React from "react";
import { View, Text, Image, StyleSheet } from "react-native"

function BottomBar(props) {
    return (
        <View style={styles.bar}>
            <View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bar: {
        width: "95%",
        height: 80,
        backgroundColor: "lightgrey",
        borderRadius: 50,
        position: "absolute",
        bottom: 50,
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: .5,
        shadowRadius: 10,
    }
})

export default BottomBar;