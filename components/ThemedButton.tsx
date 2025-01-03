// ThemedButton.tsx
import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  ViewStyle,
  TextStyle,
  StyleProp,
} from 'react-native';

// Same hook you used in ThemedText
import { useThemeColor } from '@/hooks/useThemeColor';
import { ThemedText } from './ThemedText'; // If you want to reuse your ThemedText

type ButtonVariant = 'primary' | 'secondary' | 'link' | 'plain';

export interface ThemedButtonProps extends TouchableOpacityProps {
  /** Overridden background color for light mode */
  lightColor?: string;
  /** Overridden background color for dark mode */
  darkColor?: string;
  /** Variant for pre-defined style, e.g. primary, secondary, link, etc. */
  variant?: ButtonVariant;
  /** Optional text to display. Alternatively, you could pass children. */
  title?: string;
  /** Style override for the button container */
  containerStyle?: StyleProp<ViewStyle>;
  /** Style override for the text inside button */
  textStyle?: StyleProp<TextStyle>;
}

export function ThemedButton({
  style,
  containerStyle,
  textStyle,
  lightColor,
  darkColor,
  variant = 'primary',
  title,
  children,
  ...props
}: ThemedButtonProps) {
  // This will fetch a theme-based color from your theme
  // e.g. 'background' or 'card' or 'primary'
  // By default, you pass in `light: lightColor` and `dark: darkColor`
  // to override the color if needed
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  );

  // Optionally define text color if you want a themed text
  const textColor = useThemeColor({}, 'text');

  return (
    <TouchableOpacity
      {...props}
      style={[
        { backgroundColor },
        styles.baseButton,
        variantStyles[variant],
        containerStyle, // user’s custom container style
      ]}
    >
      {/* If the user passes a "title", we can display it in ThemedText.
          Or if they pass children, we render that directly. */}
      {title ? (
        <ThemedText style={[styles.baseText, variantTextStyles[variant], { color: textColor }, textStyle]}>
          {title}
        </ThemedText>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  baseButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontSize: 16,
  },
});

// Example variant styles
const variantStyles: Record<ButtonVariant, ViewStyle> = {
  primary: {

    // Some default style for "primary" 
    backgroundColor: '#007AFF' //if you want a fallback color
  },
  secondary: {
    // Something for "secondary" 
    backgroundColor: '#ccc'
  },
  link: {
    backgroundColor: 'transparent',
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  plain: {
    backgroundColor: 'transparent',
  },
};

// Example variant text styles
const variantTextStyles: Record<ButtonVariant, TextStyle> = {
  primary: {
    // e.g. color: '#FFFFFF'
  },
  secondary: {},
  link: {
    textDecorationLine: 'underline',
  },
  plain: {},
};
