import React from 'react';
import { StyleSheet, View, Text } from "react-native"

const getStyle = (user_id) => {
    // if the user_id is the same as the current user id display it on the right
    // else display it on the left

    // NEED TO CHANGE THIS
    if (user_id === "user2") {
        return styles.otherUser
    }
    return styles.currentUser
}

const getTextStyle = (user_id) => {
    if (user_id === "user2") {
        return styles.otherUserText
    }
}

function MessageBox(props) {
    const { text, user_id } = props
    return (

        <View>
            <View style={getStyle(user_id)} >
                <Text style={getTextStyle(user_id)}>{text}</Text>
            </View >
        </View>


    );
}

const styles = StyleSheet.create({
    currentUser: {
        backgroundColor: "lightgrey",
        padding: 20,
        alignSelf: "flex-end",
        borderRadius: 20,
        margin: 10
    },
    otherUser: {
        backgroundColor: "darkgrey",
        padding: 20,
        alignSelf: "flex-start",
        borderRadius: 20,
        margin: 10,
    },
    otherUserText: {
        color: "white"
    }
})

export default MessageBox;