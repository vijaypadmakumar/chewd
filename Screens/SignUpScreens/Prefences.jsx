import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, Text, TextInput, Keyboard, FlatList, Pressable } from "react-native"
import Button from '../../Components/Button';
import * as RootNavigation from "../../RootNavigation"
import cuisines from "../../assets/icons/cuisines"
import Icon from '../../Components/Icon';

/**
 * 
 * @returns 
 */

// this should display all the cuisines around the user as small flags
// the user should not be allowed to move forward until they select atleast one option

function Preferences() {
    // change the FlatList data source to have cuisines instead of countries
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>So what do you like?</Text>
            <View style={styles.cuisines}>
                <FlatList
                    data={cuisines["cuisine"]}
                    renderItem={({ item }) => <Icon name={item} />}
                />
            </View>
            <Button title="Next" action="SignUpPageThree" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffce6d",
        width: "100%",
        height: "100%",
        flex: 1,

    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    button: {
        position: "absolute",
        bottom: 20,
        left: 80
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        margin: 20,
    },
    heading: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 34,
        marginTop: 150
    },
})

export default Preferences;