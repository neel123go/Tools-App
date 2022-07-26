import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%'
    },
    calculatorContainer: {
        paddingHorizontal: 20,
        paddingTop: 40,
        backgroundColor: '#3399cc',
        paddingBottom: 30,
    },
    input: {
        borderWidth: 3,
        marginTop: 20,
        color: '#242627',
        fontSize: 18,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 10,
        borderColor: '#fff',
        backgroundColor: '#fff'
    },
    weightContainer: {
        position: 'relative',
    },
    heightContainer: {
        position: 'relative'
    },
    inputText: {
        position: 'absolute',
        bottom: 15,
        right: 15,
        color: 'gray',
        fontSize: 20,
    },
    submitBtn: {
        marginTop: 10,
        padding: 20,
        fontSize: 40,
    },
    errText: {
        color: '#fff',
        fontSize: 23,
        marginTop: 18,
        marginBottom: 10,
        fontWeight: '500',
    },
    bmiText: {
        color: '#fff',
        fontSize: 40,
        fontWeight: '700',
        marginTop: 20,
        textAlign: 'center'
    },
    resultContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    textContainer: {
        padding: 20,
        width: '55%'
    },
    resultText: {
        fontSize: 25,
        marginLeft: 10,
        fontWeight: '600',
        color: '#3399cc',
        marginBottom: 20
    },
    imageContainer: {
        marginRight: 20,
        marginBottom: 20,
        width: '45%',
    }
});

export default styles;