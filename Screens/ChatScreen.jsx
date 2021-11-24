import React from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native"

function ChatScreen(props) {
    return (
        <View style={styles.container}>
            <ScrollView >
                <View style={styles.chatGroups}>
                    <Text>ChatBox</Text>
                </View>
                <View style={styles.chatGroups}>
                    <Text>ChatBox</Text>
                </View>
                <View style={styles.chatGroups}>
                    <Text>ChatBox</Text>
                </View>
                <View style={styles.chatGroups}>
                    <Text>ChatBox</Text>
                </View>
                <View style={styles.chatGroups}>
                    <Text>ChatBox</Text>
                </View>
                <View style={styles.chatGroups}>
                    <Text>ChatBox</Text>
                </View>
                <View style={styles.chatGroups}>
                    <Text>ChatBox</Text>
                </View>
                <View style={styles.chatGroups}>
                    <Text>ChatBox</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    chatGroups: {
        width: "95%",
        height: 80,
        backgroundColor: "red",
        padding: 20,
        margin: 10,
        borderRadius: 60
    }
})

export default ChatScreen;