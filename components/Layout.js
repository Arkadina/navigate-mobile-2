import React from "react";

import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Footer from "./Footer";

export function Layout({ children }) {
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                {children}
                <Footer />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
