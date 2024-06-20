import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen";
import OrderScreen from "../screens/OrderScreen";
import InboxScreen from "../screens/InboxScreen";
import {AntDesign, Entypo, Feather, Ionicons, Simple} from "../utils/Icons";

const Tab = createBottomTabNavigator();
const iconColor = "limegreen";
export default function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({color, size}) => {
                    return <Ionicons name={iconName} size={size} color={color}/>;
                },
                tabBarActiveTintColor: 'limegreen',
                tabBarInactiveTintColor: 'gray',
                headerShown: false,
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Simple name="home" size={size} color={color}/>
                    ),
                }}
            />
            <Tab.Screen
                name="Orders"
                component={OrderScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Entypo name="back-in-time" size={size} color={color}/>
                    ),
                }}
            />
            <Tab.Screen
                name="Inbox"
                component={InboxScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <AntDesign name="inbox" size={size} color={color}/>
                    ),
                }}
            />
            <Tab.Screen
                name="More"
                component={InboxScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Feather name="more-horizontal" size={size} color={color}/>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
