import React from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native"
import BottomBar from '../Components/BottomBar';
import ChatBox from '../Components/ChatBox';
import TitleBar from '../Components/TitleBar'
import store from '../store';
const axios = require("axios").default

const get_user_details = async (user_id) => {
    const request_url = `https://user-manager-chewd.herokuapp.com/get_user/${user_id}`

    const data = await (await axios.get(request_url)).data

    return data.name
}

function ChatScreen(props) {

    let { groups } = props.route.params

    if (groups === undefined) {
        groups = store["groups"]
    }

    // whenever a new group is created update this list

    return (
        <View style={styles.container}>
            <TitleBar />
            <View style={styles.chatArea}>
                {groups.length !== 0 ? <ScrollView>
                    {
                        groups.map((group) => {
                            return <ChatBox groupName={group[0]} />
                        })
                    }
                </ScrollView> : <Text style={styles.text}>You don't have any matches yet. Don't worry, keep swiping to get some matches.</Text>}
            </View>
            <BottomBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
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
        flex: 1,
        alignSelf: "stretch",
        alignContent: "center",
        marginTop: 20,
    },
    text: {
        alignSelf: "center",
        fontSize: 20,
        fontWeight: "bold"
    }
})

export default ChatScreen;