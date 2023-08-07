import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Stars from "../../../components/Stars";

export default function Grower({ name, image, distance, stars }) {
    const [select, setSelect] = useState(false);

    return (
        <TouchableOpacity
            style={styles.card}
            onPress={() => { setSelect(!select) }}
        >
            <Image source={image} accessibilityLabel={name} style={styles.image} />
            <View style={styles.infos}>
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Stars quantity={stars} edit={select} big={select} />
                </View>
                <Text style={styles.distance}>{distance}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#F6F6F6',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: 'row',

        // Android
        elevation: 4,

        // IOS
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },
    image: {
        marginVertical: 16,
        marginLeft: 16
    },
    infos: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16
    },
    name: {
        fontSize: 18,
        lineHeight: 22,
        fontWeight: 'bold'
    },
    distance: {
        fontSize: 18,
        lineHeight: 19
    }
});