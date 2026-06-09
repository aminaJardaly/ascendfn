import { StyleSheet, useWindowDimensions, View } from 'react-native';

import { AppText } from '@/components/ui/app-text';
import { GlassCard } from '@/components/ui/glass-card';
import { Spacing } from '@/constants/theme';

type Metric = {
  label: string;
  value: string;
};

export function MetricGrid({ metrics }: { metrics: readonly Metric[] }) {
  const { width } = useWindowDimensions();
  const isCompact = width < 360;

  return (
    <View style={styles.grid}>
      {metrics.map((metric) => (
        <GlassCard key={metric.label} style={[styles.metric, isCompact && styles.metricCompact]}>
          <AppText variant="stat">{metric.value}</AppText>
          <AppText variant="caption" tone="secondary">
            {metric.label}
          </AppText>
        </GlassCard>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  metric: {
    minWidth: 150,
    flex: 1,
  },
  metricCompact: {
    minWidth: 128,
  },
});
