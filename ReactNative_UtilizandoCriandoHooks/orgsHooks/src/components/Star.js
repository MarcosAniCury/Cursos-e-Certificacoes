import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

import star from '../assets/estrela.png';
import starGray from '../assets/estrelaCinza.png';

export default function Star({ onPress, disable = true, fully, big = false }) {
    const styles = stylesFunction(big);

    const getImage = () => {
        if (fully) {
            return star
        }
        return starGray
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disable}
        >
            <Image source={getImage()} style={styles.star} />
        </TouchableOpacity>
    );
}

const stylesFunction = (big) => StyleSheet.create({
    star: {
        width: big ? 40 : 30,
        height: big ? 40 : 30,
        marginRight: 2
    }
})