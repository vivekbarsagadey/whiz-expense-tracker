import React from 'react';
import { StyleSheet, TextInput, TextInputProps, View, StyleProp, ViewStyle } from 'react-native';
import { Controller, useFormContext } from 'react-hook-form';
import { useThemeColor } from '@/hooks/useThemeColor';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '../ThemedView';

interface FormTextInputProps extends TextInputProps {
  name: string;
  containerStyle?: StyleProp<ViewStyle>;
  lightColor?: string;
  darkColor?: string;
}

export function FormTextInput({
  name,
  containerStyle,
  lightColor,
  darkColor,
  style,
  ...rest
}: FormTextInputProps) {
  const { control } = useFormContext();
  const borderColor = useThemeColor({ light: lightColor, dark: darkColor }, 'border');

  return (
    <ThemedView style={[styles.container, containerStyle]}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => (
          <>
            <TextInput
              style={[
                styles.textInput,
                { borderColor: error ? 'red' : borderColor },
                style,
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
        )}
      />
    </ThemedView>
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