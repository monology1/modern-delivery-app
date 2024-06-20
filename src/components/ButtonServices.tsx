import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import ButtonProps from "../types/ButtonType";

function ButtonServices(props: any) {
    console.log("ButtonServices props", props);
    return (
        <>
            <View style={props.type === 'text-in' ? {width: props.width} : {width: props.width}}>
                <TouchableOpacity
                    style={[
                        styles.button,
                        {
                            height: props.height || '100%',
                            borderRadius: props.borderRadius || 10,
                            backgroundColor: props.backgroundColor || '#fff',
                            flex: props.type === 'text-out' ? 1 : 0,
                            justifyContent: props.type === 'text-out' ? 'center': 'flex-start'
                        },
                    ]}
                    onPress={props.onPress}
                    activeOpacity={1} // Setting activeOpacity to 1 to remove the feedback effect
                >
                    {props.image && <Image source={props.image} style={styles.image}/>}
                    {props.type === 'text-in' && props.text && (
                        <Text style={[styles.text, {color: props.textColor}]}>
                            {props.text}
                        </Text>
                    )}
                </TouchableOpacity>
                {props.type === 'text-out' && props.text && (
                    <Text style={[styles.text, {color: props.textColor, marginTop: 5, textAlign: 'center'}]}>
                        {props.text}
                    </Text>
                )}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    containOut:{
        width: "30%",
        display: "flex",
    },
    button: {
        padding: 10,
        marginVertical: 10,
        marginRight: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    image: {
        width: 50,
        height: 50,
        marginBottom: 10,
    },
    text: {
        fontSize: 14,
        fontWeight: "bold",
    },
});

export default ButtonServices
