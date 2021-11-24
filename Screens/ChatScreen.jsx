import React from 'react';
import { View, Text, StyleSheet } from "react-native"

function ChatScreen(props) {
    return (
        <View style={styles.container}>
            <Text>ChatScreen</Text>
        </View>
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
    }
})

export default ChatScreen;