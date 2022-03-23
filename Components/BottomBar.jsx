import React from "react";
import { View, StyleSheet } from "react-native"
import { Icon } from 'react-native-elements'
import * as RootNavigation from "../RootNavigation"
import store from "../store";
const axios = require("axios").default

const iconSize = 32

const refresh_recommendations = async (type) => {
    const { user_id } = store

    if (type === "extra") {
        const request_url = `https://recommendation-engine-chewd.herokuapp.com/extra/${user_id}`

        const data = await (await axios.get(request_url)).data

        return data
    } else {
        const request_url = `https://recommendation-engine-chewd.herokuapp.com/${user_id}`

        const data = await (await axios.get(request_url)).data

        return data
    }
}

function BottomBar(props) {
    return (
        <View style={styles.bar}>
            <View style={styles.iconLayout}>
                <Icon size={iconSize} name='albums' type='ionicon' color='' onPress={() => {
                    refresh_recommendations("")
                        .then(res => {
                            store["recommendations"] = res
                            RootNavigation.navigate("Home")
                        })
                }} />
                <Icon size={iconSize} name='flash' type='ionicon' color='red' onPress={() => {
                    console.log("extra recommendations")
                    refresh_recommendations("extra")
                        .then(res => {
                            store["recommendations"] = res
                            RootNavigation.navigate("Home")
                        })
                }} />
                <Icon size={iconSize} name='chatbubble' type='ionicon' color='#95CD41' onPress={() => {
                    const { groups } = store
                    RootNavigation.navigate("ChatScreen", { groups: groups })
                }} />
                <Icon size={iconSize + 8} name='person-circle' type='ionicon' color='#344CB7' onPress={() => {
                    RootNavigation.navigate("AccountScreen")
                }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bar: {
        width: "95%",
        height: 80,
        backgroundColor: "white",
        borderRadius: 20,
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


<Icon size={iconSize} name='albums' type='ionicon' color='' />