import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

const SingleProduct = ({ tool }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: tool?.productImage }} style={{ width: '100%', height: '68%' }} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{tool?.productName}</Text>
                <Text style={styles.categorySty}>Category: {tool?.category}</Text>
            </View>
        </View>
    )
}

export default SingleProduct;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '45%',
        marginTop: 20,
        marginLeft: 20,
        backgroundColor: '#fff',
    },
    textContainer: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        color: '#746F80'
    },
    categorySty: {
        fontSize: 18,
        fontWeight: '600',
        color: '#746F80',
        marginTop: 5,
    }
})