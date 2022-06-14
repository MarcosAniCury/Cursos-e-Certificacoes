//Modules
import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

//Components
import SimpleText from '../../../components/SimpleText';

export default function Itens({ item: { name, image } }) {

    return <View key={name} style={styled.item}>
            <Image source={image} style={styled.image}/>
            <SimpleText style={styled.name}>{ name }</SimpleText>
        </View>
}

const styled = StyleSheet.create({
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        alignItems: "center",
        marginHorizontal: 16,
    },
    image: {
        width: 46,
        height: 46,
    },
    name: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        color: "#464646",
    }
})