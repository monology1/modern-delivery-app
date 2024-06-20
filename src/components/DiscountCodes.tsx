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
        title: 'Card Title 1',
        description: 'This is the description for card 1.',
        imageUrl: 'https://picsum.photos/200/300?random=1',
    },
    {
        id: 2,
        title: 'Card Title 2',
        description: 'This is the description for card 2.',
        imageUrl: 'https://picsum.photos/200/300?random=2',
    },
    {
        id: 3,
        title: 'Card Title 3',
        description: 'This is the description for card 3.',
        imageUrl: 'https://picsum.photos/200/300?random=3',
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
