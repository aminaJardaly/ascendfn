import { PropsWithChildren } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { getThemeColors, Radius, Spacing } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

type GlassCardProps = PropsWithChildren<{
  accent?: boolean;
  style?: StyleProp<ViewStyle>;
}>;

export function GlassCard({ accent, children, style }: GlassCardProps) {
  const scheme = useColorScheme();
  const colors = getThemeColors(scheme);

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors.backgroundElement,
          borderColor: accent ? colors.accent : colors.border,
        },
        accent && { boxShadow: `0 0 22px ${colors.primary}55` },
        style,
      ]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: Spacing.two,
    padding: Spacing.three,
    borderWidth: 1,
    borderRadius: Radius.medium,
    borderCurve: 'continuous',
    boxShadow: '0 10px 28px rgba(0, 0, 0, 0.18)',
  },
});
