import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/ui/app-text';
import { GlassCard } from '@/components/ui/glass-card';
import { Radius, Spacing } from '@/constants/theme';

type OptionCardProps = {
  title: string;
  description?: string;
  meta?: string;
  selected?: boolean;
};

export function OptionCard({ title, description, meta, selected }: OptionCardProps) {
  return (
    <GlassCard accent={selected} style={styles.card}>
      <View style={styles.row}>
        <View style={styles.copy}>
          {meta ? (
            <AppText variant="caption" tone={selected ? 'accent' : 'secondary'}>
              {meta}
            </AppText>
          ) : null}
          <AppText variant="subtitle">{title}</AppText>
          {description ? <AppText tone="secondary">{description}</AppText> : null}
        </View>
        <View style={[styles.check, selected && styles.checkSelected]}>
          <AppText variant="caption" tone={selected ? 'primary' : 'secondary'}>
            {selected ? 'On' : ''}
          </AppText>
        </View>
      </View>
    </GlassCard>
  );
}

const styles = StyleSheet.create({
  card: {
    minWidth: 190,
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    gap: Spacing.two,
    alignItems: 'flex-start',
  },
  copy: {
    flex: 1,
    gap: Spacing.one,
  },
  check: {
    width: 34,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Radius.pill,
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
  checkSelected: {
    backgroundColor: '#4DE2D4',
  },
});
