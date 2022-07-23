import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    titleContainer: {
        width: '100%',
        top: 120,
        alignItems: 'center',
    },
    title: {
        fontSize: 50,
        fontWeight: '700',
        color: '#FFFDFA',
        marginTop: 30,
    },
    subTitle: {
        fontSize: 60,
        fontWeight: '600',
        color: '#FFFDFA',
        marginTop: 20,
    },
    arrowContainer: {
        width: '100%',
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        padding: 20,
    },
    arrow: {
        color: '#fff',
    },
    scrollText: {
        color: '#fff',
        fontSize: 20,
    },

});

export default styles;