import { Platform } from 'react-native';
import type { ColorSchemeName } from 'react-native';

export const Brand = {
  name: 'Ascend',
  tagline: 'Turn self-improvement into a playable life experience.',
} as const;

export const Colors = {
  light: {
    text: '#10131B',
    background: '#F5F7FA',
    backgroundElement: '#FFFFFF',
    backgroundSelected: '#ECEEFF',
    textSecondary: '#5C6675',
    border: '#DEE3EA',
    primary: '#5B4CFF',
    accent: '#1DBFB3',
    reward: '#B88916',
    danger: '#D94A64',
    success: '#1C9B74',
  },
  dark: {
    text: '#F5F7FA',
    background: '#0F1117',
    backgroundElement: '#1A1D26',
    backgroundSelected: '#252A38',
    textSecondary: '#9AA4B2',
    border: '#2B3040',
    primary: '#5B4CFF',
    accent: '#4DE2D4',
    reward: '#F6C453',
    danger: '#FF6B86',
    success: '#55D6A7',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export function getThemeColors(scheme: ColorSchemeName) {
  return Colors[scheme === 'light' ? 'light' : 'dark'];
}

export const Gradients = {
  hero: ['#5B4CFF', '#4DE2D4'] as const,
  card: ['rgba(91, 76, 255, 0.22)', 'rgba(77, 226, 212, 0.08)'] as const,
} as const;

export const Fonts = Platform.select({
  ios: {
    display: 'Sora',
    body: 'Inter',
    mono: 'ui-monospace',
  },
  web: {
    display: 'Sora, Inter, system-ui, sans-serif',
    body: 'Inter, system-ui, sans-serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, monospace',
  },
  default: {
    display: 'sans-serif',
    body: 'sans-serif',
    mono: 'monospace',
  },
});

export const Radius = {
  small: 8,
  medium: 14,
  large: 22,
  pill: 999,
} as const;

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 58, android: 80 }) ?? 0;
export const MaxContentWidth = 860;
