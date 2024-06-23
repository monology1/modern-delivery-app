import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";

type CardProps = {
    title: string;
    description: string;
    imageUrl: string;
    style: any;
};

const Card = ({title, description, imageUrl, style}: CardProps) => {
    return (
        <View style={[[styles.card, style]]}>
            <Image source={imageUrl} style={styles.image}/>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    card: {
        width: 250,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 20,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5, // for Android shadow
    },
    image: {
        width: '100%',
        height: 150,
    },
    textContainer: {
        padding: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'semibold',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: '#777',
    },
});
export default Card;
