import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import SingleProduct from '../../component/SingleProduct';

const Products = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const url = `http://10.0.2.2:5000/tools`
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    return (
        <View style={styles.productsContainer}>
            {items?.map(tool => <SingleProduct tool={tool} key={tool._id} />)}
        </View>
    )
}

export default Products;

const styles = StyleSheet.create({
    productsContainer: {
        width: '90%',
        flex: 1,
    }
})