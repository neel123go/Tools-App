import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

const Menu = () => {
    return (
        <View style={styles.menuContainer}>
            <View style={styles.textContainer}>
                <Image style={styles.imgStyle} source={require('../../assets/icons/icons8-home-page-50.png')} />
                <Text style={styles.textStyle}>Home</Text>
            </View>
            <View style={styles.textContainer}>
                <Image style={styles.imgStyle} source={require('../../assets/icons/icons8-slider-50.png')} />
                <Text style={styles.textStyle}>Tools</Text>
            </View>
            <View style={styles.textContainer}>
                <Image style={styles.imgStyle} source={require('../../assets/icons/icons8-suitcase-50.png')} />
                <Text style={styles.textStyle}>Data</Text>
            </View>
            <View style={styles.textContainer}>
                <Image style={styles.imgStyle} source={require('../../assets/icons/icons8-chat-message-50.png')} />
                <Text style={styles.textStyle}>Message</Text>
            </View>
            <View style={styles.textContainer}>
                <Image style={styles.imgStyle} source={require('../../assets/icons/icons8-collaborator-male-50.png')} />
                <Text style={styles.textStyle}>Me</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%'
    },
    textContainer: {
        marginBottom: 10,
        marginTop: 10,
        textAlign: 'center',
        cursor: 'pointer'
    },
    imgStyle: {
        width: 35,
        height: 35,
        marginHorizontal: 15,
    },
    textStyle: {
        textAlign: 'center',
        color: '#939393'
    }
})

export default Menu;