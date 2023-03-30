import React from "react";

import { Dimensions, StyleSheet, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Footer from "./Footer";
import Header from "./Header";

export function Layout({ children }) {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={styles.container}>
                    <Header />
                    <PaddingLayout>{children}</PaddingLayout>
                    <Footer />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const PaddingLayout = ({ children }) => {
    return <View style={styles.paddingLayout}>{children}</View>;
};

const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: "column",
        justifyContent: "space-between",
        height: Dimensions.get("window").height,
        backgroundColor: "#fff",
    },
    paddingLayout: {
        paddingHorizontal: 40,
    },
});
