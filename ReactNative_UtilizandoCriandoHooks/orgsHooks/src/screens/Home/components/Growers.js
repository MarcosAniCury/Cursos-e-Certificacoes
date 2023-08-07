import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import { loadingGrowers } from "../../../services/loadingData";
import Grower from "./Grower";

export default function Growers({ header: Header }) {
    const [title, setTitle] = useState('')
    const [list, setList] = useState([])

    useEffect(() => {
        const data = loadingGrowers();
        setTitle(data.title)
        setList(data.list)
    }, [])

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