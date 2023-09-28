import React from "react";
import { SafeAreaView, View, Text, Image, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function CountryScreen() {
    const route = useRoute();
    const { params } = route;
    const { item } = params;

    const renderLanguages = () => {
        const languages = item.languages;
        const languageKeys = Object.keys(languages);

        return languageKeys.map((key) => (
            <Text style={styles.text} key={key}>Language: {languages[key]}</Text>
        ));
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>{item.name.common}</Text>
                <Image
                    source={{ uri: item.flags.png }}
                    style={styles.flag}
                />
                <Text style={styles.text}>Capital: {item.capital[0]}</Text>
                <Text style={styles.text}>Region: {item.region}</Text>
                <Text style={styles.text}>Subregion: {item.subregion}</Text>
                <Text style={styles.text}>Population: {item.population}</Text>
                {renderLanguages()}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    content: {
        alignItems: "center",
        margin: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    flag: {
        width: 100,
        height: 100,
        resizeMode: "contain",
        margin: 10,
    },
    text: {
        fontSize: 16,
        marginBottom: 5,
    },
});
