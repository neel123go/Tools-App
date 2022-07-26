import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
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
    }
});

export default styles;