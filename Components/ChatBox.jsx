import React from 'react';
import { View, StyleSheet, Text } from "react-native"

function ChatBox(props) {
    return (
        <View style={styles.container}>
            <View style={styles.details}>
                {/* <Image style={styles.groupImage} source={{ uri: "https://pbs.twimg.com/profile_images/1296554590746353670/4hJASIDi_400x400.jpg" }}></Image> */}
                <Text style={styles.groupName}>
                    {props.groupName}
                </Text>
            </View>
        </View>
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