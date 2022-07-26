import { TextInput, View, Text, Button, Image } from 'react-native';
import { React, useState } from 'react';
import styles from './style';
import Img1 from '../../assets/image-1.png';
import Img2 from '../../assets/image-2.png';
import Img3 from '../../assets/image-3.png';
import Img4 from '../../assets/image-4.png';
import Img5 from '../../assets/image-5.png';

const CalculatePage = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmiNumber, setBmiNumber] = useState('');
    const [error, setError] = useState('');
    const [imgURL, setImgURL] = useState('');
    const [adviceText, setAdviceText] = useState('');

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
            const realBmi = parseFloat((parseFloat(bmi)).toFixed(2));
            setBmiNumber(realBmi);

            if (realBmi < 18.5) {

                console.log('less that 18.5');
                setAdviceText('Low body weight. Gain weight by eating in moderation.');
                setImgURL(Img1);

            } else if (realBmi >= 18.5 && realBmi <= 24.9) {

                console.log('18.5 to 24.9');
                setAdviceText('The ideal value of healthy');
                setImgURL(Img2);

            } else if (realBmi >= 25 && realBmi <= 29.9) {

                console.log('25 to 29.9');
                setAdviceText('Excess body weight. Exercise is necessary to lose excess weight');
                setImgURL(Img3);

            } else if (realBmi >= 30 && realBmi <= 34.9) {

                console.log('30 to 34.9');
                setAdviceText('First stage of obesity. Diet and exercise are necessary.');
                setImgURL(Img4);

            } else if (realBmi >= 35 && realBmi <= 39.9) {

                console.log('35 to 39.9');
                setAdviceText('Second level of obesity. Moderate diet and exercise are necessary.');
                setImgURL(Img5);

            } else if (realBmi > 40) {

                setImgURL('');
                setAdviceText("Excess weight. Fear of death. A doctor's consultation is required.");

            } else {
                setError('Something went wrong! Please try again');
            }
        }
    }

    console.log(imgURL);

    return (
        <View style={styles.container}>
            <View style={styles.calculatorContainer}>
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
                    <Text style={styles.resultText}>{adviceText}</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={`${imgURL}`} />
                </View>
            </View>
        </View>
    );
};

export default CalculatePage;