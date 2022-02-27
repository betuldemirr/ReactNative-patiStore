import React from "react";
import { View, Image, Text, SafeAreaView } from "react-native";
import styles from './ProductCard.style';

const ProductCard = ({ products }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <Image style={styles.image} source={{ uri: products.imgURL }} />
                <View style={styles.innerMostContainer} >
                    <Text style={styles.title}> {products.title} </Text>
                    <Text style={styles.price}> {products.price} </Text>
                    {!products.inStock &&
                    <View>
                        <Text style={styles.stock}>STOKTA YOK</Text>
                    </View>
                }
                </View>

            </View>
        </SafeAreaView>
    );
}
export default ProductCard;