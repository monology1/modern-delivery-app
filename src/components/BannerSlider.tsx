import React, {useRef, useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from "react-native";
import Carousel, {Pagination} from "react-native-snap-carousel";

export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

type CarouselItem = {
    id: number;
    imgUrl: string;
    title: string;
};

const data: CarouselItem[] = [
    {
        id: 1,
        imgUrl: "https://picsum.photos/200/300?random=1",
        title: "Airport Cabs",
    },
    {
        id: 2,
        imgUrl: "https://picsum.photos/200/300?random=3",
        title: "Gift Cards",
    },
    {
        id: 3,
        imgUrl: "https://picsum.photos/200/300?random=5",
        title: "Hourly Stays",
    },
    {
        id: 3,
        imgUrl: "https://picsum.photos/200/300?random=7",
        title: "Travel Insurance",
    },
    {
        id: 4,
        imgUrl: "https://picsum.photos/200/300?random=9",
        title: "Forex",
    },
    {
        id: 5,
        imgUrl: "https://picsum.photos/200/300?random=11",
        title: "HomeStays & Villas",
    },
];
const renderItem = (item: CarouselItem) => {
    return (
        <View
            style={{
                borderWidth: 1,
                padding: 20,
                borderRadius: 20,
                alignItems: 'center',
                backgroundColor: 'white',
            }}>
            <Image source={{uri: item.imgUrl}} style={{width: 200, height: 200}}/>
            <Text style={{marginVertical: 10, fontSize: 20, fontWeight: 'bold'}}>
                {item.title}
            </Text>
        </View>
    );
};

function BannerSlider(props: any) {
    const [index, setIndex] = useState(0);
    const isCarousel = useRef(null);
    return (
        <View style={{marginVertical: 10}}>
            <Carousel
                ref={isCarousel}
                data={data}
                renderItem={renderItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                onSnapToItem={(index: number) => setIndex(index)}
            />
            <Pagination
                dotsLength={data.length}
                activeDotIndex={index}
                carouselRef={isCarousel.current}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 8,
                    backgroundColor: '#F4BB41',
                }}
                tappableDots={true}
                inactiveDotStyle={{
                    backgroundColor: 'black',
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    img: {}
})
export default BannerSlider;
