import React from 'react';
import { StyleSheet, StyleProp, ViewStyle } from 'react-native';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { FormTextInput } from '@/components/form/FormTextInput'; // your minimal wrapper

import type { Control } from 'react-hook-form';

interface FormInputProps {
  /** The name of the field in the RHF form */
  name: string;
  /** The label displayed above the input */
  label: string;
  /** Optional placeholder for the text input */
  placeholder?: string;
  /** Optional style for the outer container (ThemedView) */
  containerStyle?: StyleProp<ViewStyle>;
  /** Additional props for the <FormTextInput> if desired (keyboardType, etc.) */
  inputProps?: Omit<React.ComponentProps<typeof FormTextInput>, 'name' | 'control'>;
}

/**
 * A reusable component that shows a label (ThemedText),
 * and below it a FormTextInput, all wrapped in a ThemedView.
 */
export function FormInput({
  name,
  label,
  placeholder,
  containerStyle,
  inputProps,
}: FormInputProps) {
    
  return (
    <ThemedView style={[styles.container, containerStyle]}>
      <ThemedText style={styles.label}>{label}</ThemedText>
      <FormTextInput
        name={name}
        placeholder={placeholder}
        {...inputProps}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16, // space out each input group
  },
  label: {
    marginBottom: 4,
    fontWeight: '600',
    fontSize: 16,
  },
});
