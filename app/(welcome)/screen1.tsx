// app/welcome/screen1.tsx
import { Link } from "expo-router";
import { View, Text, Button, StyleSheet } from "react-native";

export default function WelcomeScreen1() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Our App!</Text>
            <Text style={styles.subtitle}>This is the first screen.</Text>
            <Link href="/(welcome)/screen2">
                <Button title="Next" />
            </Link>
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
