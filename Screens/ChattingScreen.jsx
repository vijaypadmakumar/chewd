import React from 'react';
import { View, StyleSheet, ScrollView } from "react-native"
import NameBar from '../Components/NameBar';
import MessageBox from '../Components/MessageBox';
import InputBox from '../Components/InputBox';
import store from '../store';


function ChattingScreen(props) {
    const { matched_user } = props.route.params

    const chatMessages = store["chats"]

    return (
        <View style={styles.container}>
            <NameBar matched_user={matched_user} />
            <ScrollView style={{ backgroundColor: 'white', paddingBottom: 20 }} bounces={true} directionalLockEnabled={true} horizontal={false}>
                {chatMessages.map(message => {
                    return <MessageBox user_id={message.sent} text={message.message} />
                })}
            </ScrollView>
            <InputBox />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "space-around",
        backgroundColor: "white"
    }
})

export default ChattingScreen;