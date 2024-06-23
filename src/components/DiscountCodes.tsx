import React from 'react';
import {FlatList, StyleSheet, View} from "react-native";
import Card from "./Card";

type CardItem = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
};

const data: CardItem[] = [
    {
        id: 1,
        title: 'Free delivery',
        description: '฿20* Discount',
        imageUrl: require('../../assets/images/discount/freeDelivery.png'),
    },
    {
        id: 2,
        title: 'All Discount',
        description: 'Total up to ฿100*',
        imageUrl: require('../../assets/images/discount/allDiscount.png'),
    },
    {
        id: 3,
        title: 'Best Sellers',
        description: '฿70* Discount',
        imageUrl: require('../../assets/images/discount/bestSellers.png'),
    },
    {
        id: 4,
        title: 'Green Choices',
        description: 'Support now!',
        imageUrl: require('../../assets/images/discount/greenChoices.png'),
    },
    // Add more cards as needed
];

const DiscountCodes = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({item}) => (
                    <Card
                        title={item.title}
                        description={item.description}
                        imageUrl={item.imageUrl}
                        style={{width: 200}}
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true} // Enable horizontal scrolling
                showsHorizontalScrollIndicator={false} // Hide the scroll indicator
                contentContainerStyle={styles.list}
                ItemSeparatorComponent={() => <View style={styles.separator}/>} // Add separator between items
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    list: {
        paddingHorizontal: 10,
    },
    separator: {
        width: 10, // Space between cards
    },
});

export default DiscountCodes;
