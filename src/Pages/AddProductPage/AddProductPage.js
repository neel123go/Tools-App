import { TouchableOpacity, View, Image, TextInput, Button, Text } from 'react-native';
import { React, useState } from 'react';
import styles from './style';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome5';

const AddProductPage = () => {
    const [productImage, setProductImage] = useState('');
    const [productName, setProductName] = useState('');
    const [category, setCategory] = useState('');

    const openImageLibrary = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        // console.log(response);

        if (status !== 'granted') {
            alert('Sorry, we need camera roll permission to make this work!');
        }
        if (status === 'granted') {
            const response = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
            });

            if (!response.cancelled) {
                setProductImage(response.uri)
            }
        }
    };

    const uploadProfileImage = () => {
        const tool = {
            productImage,
            productName,
            category
        };

        fetch('http://10.0.2.2:5000/addItem', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tool)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <View style={styles.container}>
            <View style={styles.addProductContainer}>
                <TouchableOpacity onPress={openImageLibrary} style={styles.uploadBtn}>
                    {productImage ? <Image source={{ uri: productImage }} style={{ width: '100%', height: '100%' }} /> : <Icon name="plus" size={30} color="#F45920" />}
                </TouchableOpacity>

            </View>

            <TextInput value={productName} onChangeText={(text) => setProductName(text)} style={styles.inputFieldStyle} placeholder='Products Name *' />

            <TextInput value={category} onChangeText={(text) => setCategory(text)} style={styles.inputFieldStyle} placeholder='Category *' />

            {(productImage && productName && category) ? <Text
                onPress={uploadProfileImage}
                style={styles.activeBtnStyle}
            >Submit</Text> : <Text
                style={styles.disableBtnStyle}
            >Submit</Text>
            }

        </View>
    );
};

export default AddProductPage;