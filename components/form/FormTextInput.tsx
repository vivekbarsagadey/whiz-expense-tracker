// components/form/FormTextInput.tsx
import React from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { Controller, Control, useFormContext } from 'react-hook-form';
import { useThemeColor } from '@/hooks/useThemeColor';
import { ThemedText } from '@/components/ThemedText';

interface FormTextInputProps extends TextInputProps {
  /** The name of the form field (as used by react-hook-form) */
  name: string;
  /** Optional style for the container around the input + error text */
  containerStyle?: StyleProp<ViewStyle>;
  /** If you want to override the theme color for the border in light mode */
  lightColor?: string;
  /** If you want to override the theme color for the border in dark mode */
  darkColor?: string;
}

/**
 * A reusable input component that:
 * - Integrates with react-hook-form via `Controller`.
 * - Uses `useThemeColor` to get theme-based border color unless there's an error.
 * - Displays an error message beneath the input if validation fails.
 */
export function FormTextInput({
  name,
  containerStyle,
  lightColor,
  darkColor,
  style,
  ...rest
}: FormTextInputProps) {
  // We'll derive the border color from theme unless there's an error.
  // But we won't know if there's an error until we read the form's state.
  const { control } = useFormContext();
  return (
    <View style={[styles.container, containerStyle]}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => {
          // If there's an error, we’ll highlight the border in red.
          // Otherwise, we get a theme-based color for "border" or "input".
          const borderColor = error
            ? 'red'
            : useThemeColor({ light: lightColor, dark: darkColor }, 'border');

          return (
            <>
              <TextInput
                style={[
                  styles.textInput,
                  { borderColor },
                  style, // user-passed styles
                ]}
                value={value}
                onBlur={onBlur}
                onChangeText={onChange}
                {...rest}
              />
              {error && (
                <ThemedText style={styles.errorText}>
                  {error.message}
                </ThemedText>
              )}
            </>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
  },
  textInput: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 6,
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 13,
    marginTop: 2,
  },
});
