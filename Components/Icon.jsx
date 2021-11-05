import React, { useState } from 'react';
import { Pressable, Text, StyleSheet, View } from "react-native"
import store from '../store';

function Icon(props) {
    const [isSelected, setIsSelected] = useState(false)

    return (
        <Pressable style={isSelected ? styles.iconSelected : styles.icon} onPress={() => {
            if (isSelected) {
                setIsSelected(false)
                store["cuisine"].delete(props.name)
            } else {
                setIsSelected(true)
                store["cuisine"].add(props.name)
            }
        }}>
            <View style={styles.row}>
                <Text style={styles.cuisine} >{props.name}</Text>
            </View>
        </Pressable>
    );
}

export default Icon;

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
    cuisine: {
        position: "absolute",
        top: 25,
        left: 50,
        fontSize: 20
    },
})