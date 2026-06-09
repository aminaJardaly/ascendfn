import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/ui/app-text';
import { GlassCard } from '@/components/ui/glass-card';
import { Spacing } from '@/constants/theme';

type Metric = {
  label: string;
  value: string;
};

export function MetricGrid({ metrics }: { metrics: readonly Metric[] }) {
  return (
    <View style={styles.grid}>
      {metrics.map((metric) => (
        <GlassCard key={metric.label} style={styles.metric}>
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
});
