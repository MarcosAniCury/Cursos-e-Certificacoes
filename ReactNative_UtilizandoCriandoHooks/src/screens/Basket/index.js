//Modules
import React from 'react';
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';

//Screen Component
import Header from './components/Header';
import Details from './components/Details';
import Item from './components/Item';
import SimpleText from '../../components/SimpleText';

export default function Basket({ header, details, itens }) {
    return (
        <FlatList
            data={itens.listItens}
            renderItem={Item}
            keyExtractor= {({ name }) => name}
            ListHeaderComponent={() => {
                return <>
                    <Header {...header}/>
                    <View style={styled.basket}>
                        <Details {...details}/>
                        <SimpleText style={styled.titleItens}>{ itens.title }</SimpleText>
                    </View>
                </>
            }}
        />
    )
}

const styled = StyleSheet.create({
    basket: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    titleItens: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    },
});