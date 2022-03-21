import React from 'react';
import { View, StyleSheet, ScrollView } from "react-native"
import NameBar from '../Components/NameBar';
import MessageBox from '../Components/MessageBox';
import messages from '../messages';

function ChattingScreen(props) {
    const { matched_user } = props.route.params
    return (
        <View style={styles.container}>
            <NameBar matched_user={matched_user} />
            <ScrollView bounces={true} directionalLockEnabled={true} horizontal={false}>
                {messages.map(message => {
                    return <MessageBox user_id={message.sent} text={message.message} />
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "space-around"
    }
})

export default ChattingScreen;