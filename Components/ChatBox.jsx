import React from 'react';
import { View, StyleSheet, Text, Pressable } from "react-native"
import * as RootNavigation from "../RootNavigation"

const open_chat_screen = (matched_user) => {
    RootNavigation.navigate("ChattingScreen", { matched_user: matched_user })
}

function ChatBox(props) {
    return (
        <Pressable onPress={_ => {
            open_chat_screen(props.groupName)
        }}>
            <View style={styles.container}>
                <View style={styles.details}>
                    <Text style={styles.groupName}>
                        {props.groupName}
                    </Text>
                </View>
            </View>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    container: {
        width: "95%",
        height: 70,
        backgroundColor: "white",
        padding: 20,
        margin: 10,
        borderRadius: 20,
        flex: 1,
        justifyContent: "center",
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: .2,
        shadowRadius: 7,
    },
    groupImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    groupName: {
        alignSelf: "center",
        alignContent: "center"
    },
    details: {
        flexDirection: "row",
    }
})
export default ChatBox;