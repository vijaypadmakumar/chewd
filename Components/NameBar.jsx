import React from 'react';
import { View, Image, StyleSheet, Text } from "react-native"
import { Icon } from 'react-native-elements'
import * as RootNavigation from "../RootNavigation"

function NameBar(props) {
    const { matched_user } = props
    return (
        <View style={styles.titleBar}>
            <Icon style={styles.backButton} size={30} name='arrow-back-outline' type='ionicon' color='' onPress={_ => {
                RootNavigation.navigate("ChatScreen", { matched_user: matched_user })
            }} />
            <Text style={styles.userName}>{matched_user}</Text>
            <Icon style={styles.backButton} size={30} name='information-circle-outline' type='ionicon' color='' />
        </View>
    );
}

const styles = StyleSheet.create({
    titleBar: {
        width: "100%",
        height: 100,
        backgroundColor: "#CEE5D0",
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: .25,
        shadowRadius: 10,
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: "center",
        alignContent: "center"
    },
    userName: {
        marginTop: 50,
        width: 150,
        height: 50,
    },
    backButton: {
        alignSelf: "center"
    }
})

export default NameBar;