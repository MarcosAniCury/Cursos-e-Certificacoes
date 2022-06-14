//Modules
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

//Components
import SimpleText from './SimpleText';

export default function SimpleButton({ text, buttonStyle, buttonTextStyle }) 
{
    let styleButton = buttonStyle ? buttonStyle : styled.button;
    let styleButtonText = buttonTextStyle ? buttonTextStyle : styled.buttonText;

    return(
        <TouchableOpacity style={styleButton} onPress={() => {return (console.log('teste'))}}>
            <SimpleText style={styleButtonText}>{ text }</SimpleText>
        </TouchableOpacity>
    )
}

const styled = StyleSheet.create({
    button: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
    },
    buttonText: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    }
});