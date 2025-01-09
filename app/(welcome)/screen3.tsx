// app/welcome/screen3.tsx
import { useWelcomeScreen } from "@/hooks/useWelcomeScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function WelcomeScreen3() {
    const router = useRouter();
    const { setHasSeenWelcomeTrue } = useWelcomeScreen();
    const [hasSeenWelcome, setHasSeenWelcome] = useState(false);

    const handleLogin = async () => {
        await setHasSeenWelcomeTrue();
        setHasSeenWelcome(true);
        router.replace('/(auth)/login');
    }

   

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Get Started!</Text>
            <Text style={styles.subtitle}>This is the final screen.</Text>
            <Button title="Go to Home" onPress={handleLogin}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 20,
    },
});
