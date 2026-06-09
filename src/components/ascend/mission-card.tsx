import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/ui/app-text';
import { GlassCard } from '@/components/ui/glass-card';
import { ProgressBar } from '@/components/ui/progress-bar';
import { getThemeColors, Radius, Spacing } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

type MissionCardProps = {
  title: string;
  description: string;
  reward: string;
  status: string;
};

export function MissionCard({ title, description, reward, status }: MissionCardProps) {
  const scheme = useColorScheme();
  const colors = getThemeColors(scheme);

  return (
    <GlassCard>
      <View style={styles.row}>
        <View style={styles.copy}>
          <AppText variant="subtitle">{title}</AppText>
          <AppText tone="secondary">{description}</AppText>
        </View>
        <View style={[styles.badge, { backgroundColor: colors.backgroundSelected }]}>
          <AppText variant="caption" tone="accent">
            {status}
          </AppText>
        </View>
      </View>
      <ProgressBar value={38} />
      <AppText variant="caption" tone="reward">
        {reward}
      </AppText>
    </GlassCard>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: Spacing.two,
    alignItems: 'flex-start',
  },
  copy: {
    flex: 1,
    gap: Spacing.one,
  },
  badge: {
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
  },
});
