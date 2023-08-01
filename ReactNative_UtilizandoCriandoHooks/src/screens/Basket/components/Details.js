//Modules
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

//Components
import SimpleText from '../../../components/SimpleText';
import SimpleButton from '../../../components/SimpleButton';

export default function Details({ name, logo, farmName, description, value, button }) {
    return (
        <>
            <SimpleText style={styled.basketName}>{ name }</SimpleText>
            <View style={styled.farm}>
                <Image source={logo} style={styled.imageFarm}/>
                <SimpleText style={styled.farmName}>{ farmName }</SimpleText>
            </View>

            <SimpleText style={styled.description}>{ description }</SimpleText>
            <SimpleText style={styled.value}>{ value }</SimpleText>
            <SimpleButton text={button} />
        </>
    )
}

const styled = StyleSheet.create({
    basketName: {
        fontSize: 26,
        lineHeight: 42,
        color: '#464646',
        fontWeight: 'bold',
    },
    farm: {
        flexDirection: 'row',
        paddingVertical: 12,
    },
    imageFarm: {
        width: 32,
        height: 32,
    },
    farmName: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    description: {
        color: '#A3A3A3',
        fontSize: 16,
        lineHeight: 26,
    },
    value: {
        color: '#2A9F85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
});