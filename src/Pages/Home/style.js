import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        backgroundColor: '#fff',
    },
    box: {
        backgroundColor: '#FD5419',
        height: 20,
    },
    menuStyle: {
        position: 'absolute',
        bottom: 0,
    },
    lineStyle: {
        borderBottomWidth: 1,
        borderBottomColor: '#939393',
    },
    functionContainer: {
        marginTop: 80,
        paddingRight: 20,
        paddingLeft: 20,
    },
    functionContainer2: {
        marginTop: 10,
        paddingRight: 20,
        paddingLeft: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#262626',
        marginBottom: 30,
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    itemContainer2: {
        flexDirection: 'row',
    },
    buttonStyle: {
        width: 122,
        height: 100,
    },
    imgStyle: {
        width: 50,
        height: 50,
        marginHorizontal: 35,
    },
    textStyle: {
        textAlign: 'center',
    }
});

export default styles;