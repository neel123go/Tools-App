import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#EFF0F4',
    },
    addProductContainer: {
        backgroundColor: 'white',
        width: '90%',
        margin: 20,
        marginBottom: 0,
        padding: 20,
        alignItems: 'flex-start',
    },
    uploadBtn: {
        height: 100,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: 'dashed',
        borderWidth: 1,
        overflow: 'hidden',
        backgroundColor: 'white',
        borderColor: '#F45920',
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 16,
        opacity: 0.3,
        fontWeight: 'bold',
    },
    inputFieldStyle: {
        width: '90%',
        backgroundColor: 'white',
        fontSize: 20,
        padding: 20,
        marginTop: 15,
    },
    activeBtnStyle: {
        width: '90%',
        position: 'absolute',
        bottom: 15,
        backgroundColor: '#F45920',
        borderRadius: 8,
        color: 'gray',
        fontWeight: '700',
        textAlign: 'center',
        paddingVertical: 8,
        fontSize: 20,
        marginTop: 20,
        color: 'white',
    },
    disableBtnStyle: {
        width: '90%',
        position: 'absolute',
        bottom: 15,
        backgroundColor: 'gray',
        borderRadius: 8,
        color: 'gray',
        fontWeight: '700',
        textAlign: 'center',
        paddingVertical: 8,
        fontSize: 20,
        marginTop: 20,
        color: 'white',
    }
});

export default styles;