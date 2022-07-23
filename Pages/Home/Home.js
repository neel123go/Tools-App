import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import styles from './style';
import { ArrowNarrowDownIcon } from 'react-native-heroicons/solid';

const Home = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/doctor.jpg')} style={styles.image}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Calculate Your</Text>
                    <Text style={styles.subTitle}>BMI</Text>
                </View>
                <View style={styles.arrowContainer}>
                    <ArrowNarrowDownIcon size={52} style={styles.arrow} />
                    <Text style={styles.scrollText}>Scroll</Text>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Home;