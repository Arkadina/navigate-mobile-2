import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Layout } from "../components/Layout";
import { useRoute } from "@react-navigation/native";

export default function Home() {
    const route = useRoute();
    return (
        <Layout>
            <View>
                <Text style={styles.text}>{route.name}</Text>
            </View>
        </Layout>
    );
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "Poppins_400Regular",
    },
});
