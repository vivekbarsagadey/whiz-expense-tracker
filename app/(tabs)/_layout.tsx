import { Tabs, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: "absolute",
            },
            default: {},
          }),
        }}
      >
        <Tabs.Screen
          name="(home)/index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="house.fill" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="(transactions)/index"
          options={{
            title: "Transaction",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="house.fill" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="(recurring)/index"
          options={{
            title: "Recurring",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="house.fill" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: "Explore",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="paperplane.fill" color={color} />
            ),
          }}
        />
      </Tabs>

      {/* <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="slide"
        presentationStyle="overFullScreen"
        onDismiss={() => setIsModalVisible(false)}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <ThemedView style={styles.modalContainer}>
        <AddTransactionComponent onClose={() => setIsModalVisible(false)} />
        </ThemedView>
        
      </Modal> */}

      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => {
          //setIsModalVisible(true);
          router.push('/(tabs)/(transactions)/add-transaction');
        }}
      >
        <Text style={styles.plusText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: "absolute",
    // Place the button a bit above the bottom of the screen (or the tab bar).
    bottom: 70,
    alignSelf: "center", // center horizontally
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#007AFF",
    alignItems: "center",
    justifyContent: "center",
    // Example shadow/elevation
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 6,
  },
  plusText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },
  modalContainer: {
    //flex: 1,
    top: 100,
    width: 300,
    height: 300,
    padding: 20,
    borderRadius: 18,
    margin: 20,
    //justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    //backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent background
  },
  modalBackdrop: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: [{ translateX: "-50%" }, { translateY: "-50%" }],
    width: 300,
    height: 700,
    zIndex: 9999, // Ensure it's above other content
    //backgroundColor: "rgba(236, 18, 18, 0.5)", // dark overlay
    borderRadius: 18,
  },
 
});
