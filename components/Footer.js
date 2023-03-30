import { useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Dimensions } from "react-native";

import { AntDesign } from "@expo/vector-icons";

function Footer() {
    return (
        <View style={styles.footer}>
            <PressableContainer stackName="Home">
                <AntDesign name="eye" size={20} color="white" />
            </PressableContainer>
            <PressableContainer stackName="Chart" pop>
                <AntDesign name="dotchart" size={20} color="white" />
            </PressableContainer>
            <PressableContainer stackName="Key" pop>
                <AntDesign name="key" size={20} color="white" />
            </PressableContainer>
            <PressableContainer stackName="Rocket" pop>
                <AntDesign name="rocket1" size={20} color="white" />
            </PressableContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        flex: 0,
        flexDirection: "row",
        alignItems: "stretch",
        width: Dimensions.get("window").width,
        height: 55,
        paddingHorizontal: 35,
        marginBottom: 20,
    },
    footerText: {
        fontWeight: "bold",
    },
    boxContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    boxIcon: {
        flex: 0,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#776BFF",
        width: 40,
        height: 40,
        opacity: 0.8,
        borderRadius: 8,
    },
    active: {
        backgroundColor: "#a100d6",
    },
});

const PressableContainer = ({ children, stackName, pop }) => {
    const navigation = useNavigation();
    const route = useRoute();
    return (
        <View style={[styles.boxContainer]}>
            <Pressable
                style={[
                    styles.boxIcon,
                    getRoutes(stackName, route) === true ? styles.active : "",
                ]}
                onPress={() =>
                    pop
                        ? navigation.push(stackName)
                        : navigation.navigate(stackName)
                }
            >
                {children}
            </Pressable>
        </View>
    );
};

function getRoutes(route, route2) {
    if (route === route2.name) {
        return true;
    }
    return false;
}

export default Footer;
