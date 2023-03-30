import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
    Poppins_400Regular,
    Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import * as Font from "expo-font";

import Home from "./screens/Home";
import Chart from "./screens/Chart";
import Rocket from "./screens/Rocket";
import Key from "./screens/Key";

const Stack = createStackNavigator();

export default function App() {
    let [fontsLoaded] = Font.useFonts({
        Poppins_400Regular,
        Poppins_700Bold,
    });

    if (!fontsLoaded) {
        return (
            <View>
                <Text>Loading</Text>
            </View>
        );
    } else {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={{ headerShown: false }}
                    options={{ headerShown: false, gestureEnabled: false }}
                >
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen
                        name="Chart"
                        component={Chart}
                        options={horizontalAnimation}
                    />
                    <Stack.Screen
                        name="Key"
                        component={Key}
                        options={horizontalAnimation}
                    />
                    <Stack.Screen
                        name="Rocket"
                        component={Rocket}
                        options={horizontalAnimation}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}



const horizontalAnimation = {
    gestureDirection: "horizontal",
    cardStyleInterpolator: ({ current, layouts }) => {
        return {
            cardStyle: {
                transform: [
                    {
                        translateX: current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [layouts.screen.width, 0],
                        }),
                    },
                ],
            },
        };
    },
};

export const verticalAnimation = {
    gestureDirection: "vertical",
    cardStyleInterpolator: ({ current, layouts }) => {
        return {
            cardStyle: {
                transform: [
                    {
                        translateY: current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [layouts.screen.height, 0],
                        }),
                    },
                ],
            },
        };
    },
};
