import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/ui/app-text';
import { getThemeColors, Radius, Spacing } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

type InfoRowProps = {
  label: string;
  value: string;
  meta?: string;
  highlight?: boolean;
};

export function InfoRow({ label, value, meta, highlight }: InfoRowProps) {
  const colors = getThemeColors(useColorScheme());

  return (
    <View style={[styles.row, { borderColor: colors.border }, highlight && { borderColor: colors.accent }]}>
      <View style={styles.copy}>
        <AppText variant="subtitle">{label}</AppText>
        {meta ? <AppText tone="secondary">{meta}</AppText> : null}
      </View>
      <AppText variant="caption" tone={highlight ? 'accent' : 'reward'}>
        {value}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
    borderWidth: 1,
    borderRadius: Radius.medium,
    borderCurve: 'continuous',
    padding: Spacing.three,
  },
  copy: {
    flex: 1,
    gap: Spacing.one,
  },
});
