import React from "react";

import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Footer from "./Footer";
import Header from "./Header";

export function Layout({ children }) {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <Header />
                {children}
                <Footer />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
