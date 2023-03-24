import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const Header = () => {
    const navigate = useNavigation();
    const route = useRoute();
    console.log(navigate.canGoBack());

    return (
        <View style={styles.container}>
            {navigate.canGoBack() && (
                <Pressable onPress={() => navigate.goBack()}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </Pressable>
            )}
            <Text style={styles.text}>{route.name}</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        flex: 0,
        height: 50,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        paddingHorizontal: 40,
    },
    text: {
        fontFamily: "Poppins_700Bold",
    },
});
