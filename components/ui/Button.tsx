import { TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { ThemedText } from '../ThemedText';

interface ButtonProps {
  onPress: () => void;
  title: string;
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
  disabled?: boolean;
}

export function Button({ 
  onPress, 
  title, 
  variant = 'primary', 
  isLoading, 
  disabled 
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isLoading || disabled}
      style={[
        styles.button,
        variant === 'primary' ? styles.primaryButton : styles.secondaryButton,
        disabled && styles.disabledButton
      ]}
    >
      {isLoading ? (
        <ActivityIndicator color="#FFFFFF" />
      ) : (
        <ThemedText style={styles.buttonText}>{title}</ThemedText>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: '#007AFF',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  disabledButton: {
    opacity: 0.5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
}); 