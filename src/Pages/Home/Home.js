import React from 'react';
import { Dimensions, View, Text, TouchableOpacity, Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Menu from '../../component/Menu';
import styles from './style';

const Home = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.box}>
                    <Svg
                        height={100}
                        width={Dimensions.get('screen').width}
                        viewBox="0 0 1440 320"
                        style={styles.topWavy}
                    >
                        <Path
                            fill="#FD5419"
                            d='M0,256L80,234.7C160,213,320,171,480,154.7C640,139,800,149,960,149.3C1120,149,1280,139,1360,133.3L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'
                        />
                    </Svg>
                </View>
            </View>

            <View style={styles.functionContainer}>
                <Text style={styles.title}>Basic Function</Text>

                <View style={styles.itemContainer}>
                    <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("AddProduct")}>
                        <Image style={styles.imgStyle} source={require('../../../assets/icons/add-product.png')} />
                        <Text style={styles.textStyle}>Add Product</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("Products")}>
                        <Image style={styles.imgStyle} source={require('../../../assets/icons/products.png')} />
                        <Text style={styles.textStyle}>Products</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyle}>
                        <Image style={styles.imgStyle} source={require('../../../assets/icons/order.png')} />
                        <Text style={styles.textStyle}>Order</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.itemContainer}>
                    <TouchableOpacity style={styles.buttonStyle}>
                        <Image style={styles.imgStyle} source={require('../../../assets/icons/drop-offs.png')} />
                        <Text style={styles.textStyle}>Schedule Drop-offs</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyle}>
                        <Image style={styles.imgStyle} source={require('../../../assets/icons/finance.png')} />
                        <Text style={styles.textStyle}>Finance</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyle}>
                        <Image style={styles.imgStyle} source={require('../../../assets/icons/review.png')} />
                        <Text style={styles.textStyle}>Manage Reviews</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.functionContainer2}>
                <Text style={styles.title}>Marketing</Text>

                <View style={styles.itemContainer2}>
                    <TouchableOpacity style={styles.buttonStyle}>
                        <Image style={styles.imgStyle} source={require('../../../assets/icons/seller-picks.png')} />
                        <Text style={styles.textStyle}>Add Product</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.menuStyle}>
                <View style={styles.lineStyle}></View>
                <Menu />
            </View>
        </View>
    );
};

export default Home;