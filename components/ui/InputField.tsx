import { TextInput, View, StyleSheet } from 'react-native';
import { ThemedText } from '../ThemedText';
import { useColorScheme } from 'react-native';

interface InputFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
  secureTextEntry?: boolean;
  placeholder?: string;
}

export function InputField({
  label,
  value,
  onChangeText,
  error,
  secureTextEntry,
  placeholder,
}: InputFieldProps) {
  const colorScheme = useColorScheme();
  
  return (
    <View style={styles.container}>
      <ThemedText  style={styles.label}>
        {label}
      </ThemedText>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={[
          styles.input,
          { color: colorScheme === 'dark' ? '#FFFFFF' : '#000000' },
          error && styles.inputError
        ]}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor={colorScheme === 'dark' ? '#666666' : '#999999'}
      />
      {error && (
        <ThemedText style={styles.errorText}>
          {error}
        </ThemedText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  inputError: {
    borderColor: '#FF3B30',
  },
  errorText: {
    color: '#FF3B30',
    marginTop: 4,
  },
}); 