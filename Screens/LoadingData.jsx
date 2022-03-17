import React, { useState } from 'react';
import { StyleSheet, ActivityIndicator, View, Text, Alert } from "react-native"
import store from '../store';
const axios = require("axios").default
import * as RootNavigation from "../RootNavigation"
import HomeScreen from './HomeScreen';
import objectHash from 'object-hash';

/*
    - verify if the user actually exists
    - if they do get recommendations store it to user
    - otherwise alert user and go to signup
*/

const get_data = async () => {
    const { username, password } = store
    const user_id = objectHash(username + password)

    const valid_account = await (await axios.get(`https://user-manager-chewd.herokuapp.com/get_user/${user_id}`)).data

    if (valid_account !== 400) {
        const recommendations = await (await axios.get(`https://recommendation-engine-chewd.herokuapp.com/${user_id}`)).data
        store["recommendations"] = recommendations
        store["user_id"] = user_id

        return 200
    } else {
        Alert.alert(
            "Account does not exist",
            "We couldn't find an account associated with that details, try again or signup",
            [
                {
                    text: "Try again",
                    onPress: () => RootNavigation.navigate("Login"),
                    style: "destructive"
                },
                {
                    text: "Signup",
                    onPress: () => RootNavigation.navigate("Signup"),
                    style: "destructive"
                }
            ]
        )

        return 400
    }

}

function LoadingData(props) {
    const [fullyLoaded, setFullyLoaded] = useState(false)

    get_data()
        .then(data => {
            if (data === 200) {
                setFullyLoaded(true)
            } else {
                setFullyLoaded(false)
            }
        })

    return (
        !fullyLoaded ? (
            <View style={styles.container}>
                <Text style={styles.text}>Running the numbers.</Text>
                {/* add some funny text */}
                <ActivityIndicator size="large" color="black" />
            </View>
        ) : <HomeScreen />
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        width: "100%",
        height: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 35,
        color: "#FFCE6D",
        paddingBottom: 50,
    }
})
export default LoadingData;
