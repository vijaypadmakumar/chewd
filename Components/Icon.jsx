import React, { useState } from 'react';
import { Pressable, Icon, Text, StyleSheet, View } from "react-native"
import * as RootNavigation from "../RootNavigation"

function Icon2(props) {
    const [isSelected, setIsSelected] = useState(false)
    return (
        <Pressable style={isSelected ? styles.iconSelected : styles.icon} onPress={() => {
            if (isSelected) {
                setIsSelected(false)
            } else {
                setIsSelected(true)
            }
        }}>
            <View style={styles.row}>
                <Text style={styles.emoji}>{props.emoji}</Text>
                <Text style={styles.emojiDesc} >{props.name}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    icon: {
        width: "95%",
        height: 80,
        borderRadius: 40,
        backgroundColor: "white",
        margin: 10,
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: 0.9,
        shadowRadius: 1,
    },
    iconSelected: {
        width: "95%",
        height: 80,
        borderRadius: 40,
        backgroundColor: "grey",
        margin: 10,
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: .9,
        shadowRadius: 10,
    },
    emoji: {
        textAlign: "left",
        margin: 20,
        fontSize: 30,
    },
    row: {
    },
    emojiDesc: {
        position: "absolute",
        top: 25,
        left: 100,
        fontSize: 20
    },
})

export default Icon2;