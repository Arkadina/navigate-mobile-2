import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Layout } from "../components/Layout";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function Home() {
    const navigate = useNavigation();
    const route = useRoute();
    console.log(route);
    return (
        <Layout>
            <View>
                <Text>{route.name}</Text>
            </View>
        </Layout>
    );
}

const styles = StyleSheet.create({});
