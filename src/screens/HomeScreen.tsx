import {Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import {AntDesign, Ionicons} from "../utils/Icons";
import ButtonServices from "../components/ButtonServices";
import {useNavigation} from "@react-navigation/native";
import BannerSlider from "../components/BannerSlider";
import DiscountCodes from "../components/DiscountCodes";

const name = 'modern';
// const navigate = useNavigation();
const HomeScreen = () => {
    return (
        <>
            <ImageBackground source={require('../../assets/images/home/home_background_cover_2.png')}
                             style={styles.background} imageStyle={styles.cover}>
                <ScrollView style={styles.container}>
                    {/* Header Section */}
                    <View style={styles.header}>
                        <Text style={styles.greeting}>Hi {name}</Text>
                        <Text style={styles.subGreeting}>Let's order great meals!</Text>
                        <View style={styles.headerIcons}>
                        </View>
                    </View>
                    {/* Location Section*/}
                    <View style={styles.locationSection}>
                        <View style={styles.locationContainer}>
                            <Ionicons name="location-outline" style={styles.locationIcon}></Ionicons>
                            <Text style={styles.locationText}>Current location</Text>
                        </View>
                        <AntDesign name='right' style={styles.rightIcon}></AntDesign>
                    </View>
                    {/*Button*/}
                    <View style={styles.buttonContainer}>
                        <ButtonServices
                            type="text-in"
                            text="Food Delivery"
                            width='50%'
                            height='4rem'
                            image={require('../../assets/icons/home/food_icon.png')}
                        />
                        <ButtonServices
                            type="text-in"
                            text="Rider"
                            width='50%'
                            height='4rem'
                            image={require('../../assets/icons/home/rider_icon.png')}
                        />
                        <ButtonServices
                            type="text-out"
                            text="Messenger"
                            width='33%'
                            height='4rem'
                            image={require('../../assets/icons/home/messenger_icon.png')}
                        />
                        <ButtonServices
                            type="text-out"
                            text="Mart"
                            width='33%'
                            height='4rem'
                            image={require('../../assets/icons/home/mart_icon.png')}
                        />
                        <ButtonServices
                            type="text-out"
                            text="Coupon"
                            width='33%'
                            height='4rem'
                            image={require('../../assets/icons/home/coupon_icon.png')}
                        />
                    </View>
                    {/*Banner*/}
                    <View style={styles.bannerContainer}>
                        <Image source={require('../../assets/images/home/kfc_banner.png')}
                               style={styles.bannerImage}/>
                    </View>
                    {/*BannerSlider*/}
                    <View style={styles.container}>
                        {/*<BannerSlider/>*/}
                    </View>

                    {/*100discount*/}
                    <View style={styles.container}>
                        <Text style={styles.subHeader}>Up to ฿100* OFF with codes!</Text>
                    </View>
                    <SafeAreaView style={styles.container}>
                        <DiscountCodes/>
                    </SafeAreaView>
                </ScrollView>
            </ImageBackground>
        </>
    )
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    cover: {
        borderBottomLeftRadius: 30, // Add radius to the bottom left corner
        borderBottomRightRadius: 30, // Add radius to the bottom right corner
        overflow: 'hidden', // Ensure the corners are clipped
        height: '40%'
    },
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        marginTop: 60,
        paddingHorizontal: 10
    },
    header: {
        padding: 20,
        backgroundColor: 'transparent',
    },
    subHeader: {
        fontWeight: 'bold'
    },
    greeting: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    subGreeting: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    headerIcons: {
        flexDirection: 'row',
        marginTop: 10,
    },
    icon: {
        width: 24,
        height: 24,
        marginLeft: 10,
    },
    locationSection: {
        flexDirection: 'row', // Change to row to align items horizontally
        alignItems: 'center', // Center items vertically
        justifyContent: 'space-between', // Space between location and right icon
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 10,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center', // Center items vertically in the row
    },
    locationIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
        fontSize: 18,
    },
    locationText: {
        fontSize: 16,
        color: '#555',
    },
    rightIcon: {
        fontSize: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    bannerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginTop: 20,
        maxWidth: 500,
    },
    bannerImage: {
        width: '100%',
        height: 150,
    }
});

export default HomeScreen
