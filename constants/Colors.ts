/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#16A085'; // bold teal
const tintColorDark = '#16A085';  // can keep the same, or shift slightly brighter

export const Colors = {
  light: {
    text: '#11181C',
    background: '#ffffff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,

    error: '#FF3B30',
    success: '#34C759',
    warning: '#FFCC00',
    textSecondary: '#666666',


    border: '#D1D5DB',
    income: '#2AA952',   // bright green
    expense: '#EB5757',  // red
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,


    error: '#FF3B30',
    success: '#34C759',
    warning: '#FFCC00',
    textSecondary: '#666666',

    border: '#374151',
    income: '#27AE60',   // another green
    expense: '#EB5757',  // red still works
  },
};


