import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Keyboard, KeyboardAvoidingView } from "react-native"
import { Icon } from 'react-native-elements';
import store from '../store';


function InputBox(props) {
    const [messageText, setMessageText] = useState("")
    return (
        <KeyboardAvoidingView behavior='position' style={styles.container} onPress={_ => {
            Keyboard.dismiss()
        }}>
            <View style={styles.mainContainer}>
                <View style={styles.inputField}>
                    <TextInput placeholder='Enter a message' multiline={true} value={messageText} onChangeText={text => {
                        setMessageText(text)
                    }} />
                </View>
                <View style={styles.sendButton}>
                    <Icon size={40} name='arrow-up-circle' type='ionicon' color='#95CD41' onPress={_ => {
                        let chats = store["chats"]
                        if (messageText !== "") {
                            chats.push({
                                message: messageText,
                                sent: "user1", // change this to dynamic user 
                                stamp: "1212"
                            })
                        }
                        store["chats"] = chats
                        setMessageText("")
                    }} />
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: "8%",
        flexDirection: "row",
        alignContent: "space-around",
        borderTopColor: "grey",
        borderTopWidth: .5,
        marginBottom: 20,
    },
    inputField: {
        backgroundColor: "white",
        width: "80%",
        height: 40,
        margin: 12,
        padding: 10,
        borderRadius: 30,
        borderColor: "black",
        borderWidth: 1,
        textAlignVertical: "top",

    },
    mainContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    }
})

export default InputBox;