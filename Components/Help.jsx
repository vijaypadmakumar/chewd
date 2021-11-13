import React from 'react';
import { Text, Pressable, StyleSheet, View } from "react-native"

function Help(props) {
    return (
        <View>
            <Pressable onPress={() => {
                console.log("help component clicked")
            }}>
                <Text style={styles.text}>{props.helpTitle}</Text>
            </Pressable>
        </View>
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
    text: {
        textDecorationLine: "underline",
        color: "grey"
    }
})

export default Help;