import { StyleSheet, View } from 'react-native';

import { getThemeColors, Radius } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

type ProgressBarProps = {
  value: number;
};

export function ProgressBar({ value }: ProgressBarProps) {
  const scheme = useColorScheme();
  const colors = getThemeColors(scheme);
  const width = `${Math.max(0, Math.min(value, 100))}%` as const;

  return (
    <View style={[styles.track, { backgroundColor: colors.backgroundSelected }]}>
      <View style={[styles.fill, { width, backgroundColor: colors.accent }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    height: 9,
    borderRadius: Radius.pill,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: Radius.pill,
  },
});
