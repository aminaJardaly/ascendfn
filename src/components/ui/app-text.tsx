import { PropsWithChildren } from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';

import { Fonts, getThemeColors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

type TextTone = 'primary' | 'secondary' | 'accent' | 'reward';
type TextVariant = 'hero' | 'title' | 'subtitle' | 'body' | 'caption' | 'stat';

type AppTextProps = PropsWithChildren<{
  variant?: TextVariant;
  tone?: TextTone;
  style?: StyleProp<TextStyle>;
}>;

export function AppText({ children, variant = 'body', tone = 'primary', style }: AppTextProps) {
  const scheme = useColorScheme();
  const colors = getThemeColors(scheme);
  const color =
    tone === 'secondary'
      ? colors.textSecondary
      : tone === 'accent'
        ? colors.accent
        : tone === 'reward'
          ? colors.reward
          : colors.text;

  return (
    <Text selectable style={[styles.base, styles[variant], { color }, style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  base: {
    fontFamily: Fonts?.body,
    letterSpacing: 0,
  },
  hero: {
    fontFamily: Fonts?.display,
    fontSize: 38,
    lineHeight: 44,
    fontWeight: '800',
  },
  title: {
    fontFamily: Fonts?.display,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '800',
  },
  subtitle: {
    fontFamily: Fonts?.display,
    fontSize: 20,
    lineHeight: 26,
    fontWeight: '700',
  },
  body: {
    fontSize: 15,
    lineHeight: 22,
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  stat: {
    fontFamily: Fonts?.display,
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '800',
  },
});
