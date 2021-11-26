import React from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native"
import BottomBar from '../Components/BottomBar';

function ChatScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.chatArea}>
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
            <BottomBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    chatGroups: {
        width: "95%",
        height: 80,
        backgroundColor: "red",
        padding: 20,
        margin: 10,
        borderRadius: 60
    },
    chatArea: {
        alignSelf: "stretch",
    }
})

export default ChatScreen;