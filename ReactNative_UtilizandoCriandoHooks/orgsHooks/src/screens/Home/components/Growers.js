import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import useGrowers from "../../../hooks/useGrowers";
import Grower from "./Grower";

export default function Growers({ header: Header }) {
    const [title, list] = useGrowers();

    const HeaderList = () => <>
        <Header />
        <Text style={styles.title}>{title}</Text>
    </>

    return <FlatList
        data={list}
        renderItem={({ item }) => <Grower {...item} />}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={HeaderList}
    />
}

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        lineHeight: 42,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646'
    }
})