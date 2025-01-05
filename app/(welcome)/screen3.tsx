// app/welcome/screen3.tsx
import { Link } from "expo-router";
import { View, Text, Button, StyleSheet } from "react-native";

export default function WelcomeScreen3() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Get Started!</Text>
            <Text style={styles.subtitle}>This is the final screen.</Text>
            <Link href="/">
                <Button title="Go to Home" />
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
