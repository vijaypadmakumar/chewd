import React from "react";
import { View, Text, Image, StyleSheet } from "react-native"
import { Icon } from 'react-native-elements'

function BottomBar(props) {
    return (
        <View style={styles.bar}>
            <View style={styles.iconLayout}>
                <Icon name='person' type='ionicon' color='grey' />
                <Icon name='chatbubble' type='ionicon' color='grey' />
                <Icon name='settings' type='ionicon' color='grey' />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bar: {
        width: "95%",
        height: 80,
        backgroundColor: "white",
        borderRadius: 50,
        position: "absolute",
        bottom: 50,
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: .2,
        shadowRadius: 10,
    },
    iconLayout: {
        zIndex: 20,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    }
})

export default BottomBar;