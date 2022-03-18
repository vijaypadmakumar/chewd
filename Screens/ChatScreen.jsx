import React from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native"
import BottomBar from '../Components/BottomBar';
import ChatBox from '../Components/ChatBox';
import TitleBar from '../Components/TitleBar'
import store from '../store';

function ChatScreen(props) {

    const { groups } = store
    // whenever a new group is created update this list

    return (
        <View style={styles.container}>
            <TitleBar />
            <View style={styles.chatArea}>
                {groups.length !== 0 ? <ScrollView>
                    {
                        groups.map((group) => {
                            return <ChatBox groupName="Group Name" />
                        })
                    }
                </ScrollView> : <Text style={styles.text}>Ooops no matches yet, np keep swiping.</Text>}
            </View>
            <BottomBar />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        flex: 1,
        alignSelf: "stretch",
        alignContent: "center",
        marginTop: 20,
    },
    text: {

    }
})

export default ChatScreen;