import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, Modal, Image } from 'react-native';
import * as RootNavigation from "../RootNavigation"
import { Icon } from 'react-native-elements'
import Button from "../Components/Button";

function AccountScreen(props) {
    const [modalVisible, setModalVisible] = useState(true)

    const profilePictureURL = "https://pbs.twimg.com/profile_images/1296554590746353670/4hJASIDi_400x400.jpg"

    return (
        <View>
            <Modal visible={modalVisible} animationType="slide" onDismiss={() => RootNavigation.navigate("Home")} presentationStyle={"pageSheet"}>
                <TouchableWithoutFeedback onPressOut={(e) => {
                    if (e.nativeEvent.locationY > 60) {
                        setModalVisible(false)
                    }
                }}>
                    <View >
                        <Icon type='material-icon' name='drag-handle' color='#ddd' />
                        <View style={styles.container}>
                            <Image style={styles.profilePicture} source={{ uri: profilePictureURL }} />
                            <View style={styles.subContainer}>
                                <Text style={styles.text}>Vijay Padmakumar</Text>
                                <View style={{ marginLeft: 25, marginTop: 50 }}>
                                    <Button title="Update details" />
                                    <Button title="Update preferences" />
                                    <Button title="Delete account" />
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal >
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        flex: 1,
        alignItems: "center"
    },
    profilePicture: {
        backgroundColor: "blue",
        width: 200,
        height: 200,
        borderRadius: 100,
        marginTop: 20,
    },
    subContainer: {
        zIndex: 20,
        marginTop: 250,
        position: "absolute"
    },
    text: {
        fontSize: 40,
    }
})

export default AccountScreen;

/*
This should contain a way to update
    user image
    details
        change name
        change email
        change password
    preferences
    delete account
*/