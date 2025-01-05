// app/welcome/screen2.tsx
import { Link } from "expo-router";
import { View, Text, Button, StyleSheet } from "react-native";

export default function WelcomeScreen2() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Discover Features</Text>
            <Text style={styles.subtitle}>This is the second screen.</Text>
            <Link href="/(welcome)/screen3">
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
