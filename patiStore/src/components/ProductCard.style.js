import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({

    container: {
        backgroundColor: '#FC6E20',
        borderRadius: 10,
        margin: 10,
    },
    innerContainer: {
        width: Dimensions.get('window').width/2.5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 3,
        aspectRatio: 0.8,
    },
    innerMostContainer: {
        alignItems: 'flex-end',
        padding: 2,
    },
    image: {
        width: Dimensions.get('screen').width/4,
        height: Dimensions.get('screen').height/5,
        borderRadius: 10,
        aspectRatio: 0.9,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        color: 'black',
    },
    price: {
        fontWeight: 'bold',
        fontSize: 13,
        color: '#70707d',
    },
    stock: {
        fontSize: 12,
        color: '#FC6E20',
    }
})