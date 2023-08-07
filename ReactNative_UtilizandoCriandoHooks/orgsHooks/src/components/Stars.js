import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Star from "./Star";



export default function Stars({ quantity: oldQuantity, edit = true, big = false }) {
    const [quantity, setQuantity] = useState(oldQuantity);

    const RenderStars = () => {
        const listStars = [];
        for (let i = 0; i < 5; i++) {
            listStars.push(
                <Star
                    key={i}
                    onPress={() => setQuantity(i + 1)}
                    disable={!edit}
                    fully={i < quantity}
                    big={big}
                />
            );
        }

        return listStars;
    }

    return <View style={styles.stars}>
        <RenderStars />
    </View>
}

const styles = StyleSheet.create({
    stars: {
        flexDirection: 'row'
    }
})