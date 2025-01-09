import { View, StyleSheet } from 'react-native';
import { ThemedButton } from '@/components/ThemedButton';
import { ThemedText } from '@/components/ThemedText';
import { useRouter } from 'expo-router';

interface ActionButton {
  title: string;
  icon: string;
  route: string;
  onPress?: () => void;
}

const buttons: ActionButton[] = [
  { title: "Add money", icon: "+" , route: '/(tabs)/(transactions)/add-transaction'},
  { title: "Exchange", icon: "\u21C4" , route: '/(tabs)/(transactions)/exchange'},
  { title: "Details", icon: "\u2139" , route: '/(tabs)/(transactions)/details'},
  { title: "More", icon: "\u2026" , route: '/(tabs)/(transactions)//more'},
];

export function ActionButtons() {
    const router = useRouter();
  return (
    <View style={styles.container}>
      {buttons.map((button, index) => (
        <View key={button.title} style={styles.buttonContainer}>
          <ThemedButton
            variant="plain"
            containerStyle={styles.iconButton}
                  onPress={() => { 
                      router.push(button.route as any);
                  }}
          >
            <ThemedText type="title" style={styles.icon}>
              {button.icon}
            </ThemedText>
          </ThemedButton>
          <ThemedText type="default" style={styles.buttonText}>
            {button.title}
          </ThemedText>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  buttonContainer: {
    alignItems: 'center',
    gap: 4,
  },
  iconButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 24,
    lineHeight: 24,
  },
  buttonText: {
    fontSize: 12,
    textAlign: 'center',
  },
});
