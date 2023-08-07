import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import logo from "../../../assets/logo.png";
import { loadingHeader } from "../../../services/loadingData";

class Header extends React.Component {
    state = {
        header: {
            welcome: "",
            caption: ""
        }
    };

    updateHeader() {
        const headerMock = loadingHeader();
        this.setState({ header: headerMock })
    }

    componentDidMount() {
        this.updateHeader()
    }

    render() {
        return <View style={styles.header}>
            <Image source={logo} style={styles.image} />
            <Text style={styles.welcome}>Olá Marcos</Text>
            <Text style={styles.caption}>Encontre os melhores produtores</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#F6F6F6',
        padding: 16
    },
    image: {
        width: 140,
        height: 56
    },
    welcome: {
        marginTop: 24,
        fontSize: 40,
        lineHeight: 70,
        fontWeight: "bold",
        color: '#464646'
    },
    caption: {
        fontSize: 20,
        lineHeight: 40,
        color: '#A3A3A3'
    }
})

export default Header;