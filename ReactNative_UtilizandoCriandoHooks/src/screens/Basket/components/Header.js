//Modules
import React from 'react';
import { Image, Dimensions, StyleSheet } from 'react-native';

//Components
import SimpleText from '../../../components/SimpleText';

//Images
import imageHeader from '../../../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Header({ title }) {
    return (
        <>
            <Image source={imageHeader} style={styled.imageHeader}/>
            <SimpleText style={styled.title}>{ title }</SimpleText>
        </>
    )
}

const styled = StyleSheet.create({
    imageHeader: {
        width: '100%',
        height: 578 / 768 * width,
    },
    title: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        color: 'white',
        fontWeight: 'bold',
        padding: 16,
    },
})