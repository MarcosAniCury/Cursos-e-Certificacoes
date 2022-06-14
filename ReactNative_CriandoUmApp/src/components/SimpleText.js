//Modules
import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function SimpleText({ children, style })
{
    let selectStyle = styled.simpleText;

    if (style?.fontWeight === 'bold') {
        selectStyle = styled.simpleTextBold;
    }
    return (
        <Text style={[style, selectStyle]}>{ children }</Text>
    )
}

const styled = StyleSheet.create({
    simpleText: {
        fontFamily: 'Montserrat-Regular',
        fontWeight: 'normal'
    },
    simpleTextBold: {
        fontFamily: 'Montserrat-Bold',
        fontWeight: 'normal',
    }
})