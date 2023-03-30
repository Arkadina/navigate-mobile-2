import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Layout } from "../components/Layout";

export default function Rocket() {
    return (
        <Layout>
            <Text style={styles.text}>Rocket Screen</Text>
        </Layout>
    );
}

const styles = StyleSheet.create({text: {
    fontFamily: "Poppins_400Regular",
},});
