import { TextInput, View, Text, Button, Image } from 'react-native';
import { React, useState } from 'react';
import styles from './style';

const CalculatePage = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmiNumber, setBmiNumber] = useState('');
    const [error, setError] = useState('');
    const [imgURL, setImgURL] = useState('');

    const calculateBMI = () => {
        if (weight === '' || height === '') {
            setError('Field must not be empty');
            setBmiNumber('');
        }
        else if (isNaN(weight) || isNaN(height)) {
            setError('Enter numeric value');
            setBmiNumber('');
        } else {
            setError('');
            const bmi = parseFloat(height) / (parseFloat(weight) * parseFloat(weight));
            setBmiNumber(parseFloat((parseFloat(bmi)).toFixed(2)));

            if (bmiNumber) {
                if (bmiNumber < 18.5) {

                    console.log('less that 18.5');

                    setImgURL(require('../../assets/image-1.png'));
                } else if (bmiNumber >= 18.5 && bmiNumber <= 24.9) {

                    console.log('18.5 to 24.9');
                    setImgURL(require('../../assets/image-2.png'));
                } else if (bmiNumber >= 25 && bmiNumber <= 29.9) {

                    console.log('25 to 29.9')
                    setImgURL(require('../../assets/image-3.png'));
                } else if (bmiNumber >= 30 && bmiNumber <= 34.9) {

                    console.log('30 to 34.9');
                    setImgURL(require('../../assets/image-4.png'));
                } else if (bmiNumber >= 35 && bmiNumber <= 39.9) {

                    console.log('35 to 39.9');
                    setImgURL(require('../../assets/image-5.png'));
                } else if (bmiNumber > 40) {

                    console.log('danger')
                    setImgURL('Danger');
                } else {
                    setError('Something went wrong! Please try again');
                }
            }

        }
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.weightContainer}>
                    <TextInput keyboardType='numeric' onChangeText={setWeight} placeholder='Enter your Weight' style={styles.input} />
                    <Text style={styles.inputText}>m</Text>
                </View>
                <View style={styles.heightContainer}>
                    <TextInput keyboardType='numeric' onChangeText={setHeight} placeholder='Enter your Height' style={styles.input} />
                    <Text style={styles.inputText}>kg</Text>
                </View>

                <Text style={styles.errText}>{error}</Text>
                <Button
                    title='Calculate'
                    color='#242627'
                    style={styles.submitBtn}
                    onPress={() => calculateBMI()}
                />
                <Text style={styles.bmiText}>Your BMI: {bmiNumber}</Text>
            </View>

            <View style={styles.resultContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.resultText}>Hello</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={imgURL} />
                </View>
            </View>
        </>
    );
};

export default CalculatePage;