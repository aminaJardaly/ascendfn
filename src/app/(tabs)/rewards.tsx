import { StyleSheet, View } from 'react-native';

import { AppScreen } from '@/components/ui/app-screen';
import { AppText } from '@/components/ui/app-text';
import { GlassCard } from '@/components/ui/glass-card';
import { InfoRow } from '@/components/ui/info-row';
import { PageHeader } from '@/components/ui/page-header';
import { Colors, Radius, Spacing } from '@/constants/theme';
import { achievements, rewardUnlocks } from '@/data/ascend';

export default function RewardsScreen() {
  return (
    <AppScreen>
      <PageHeader
        eyebrow="Reward vault"
        title="Rewards"
        description="Badges, streaks, and unlocks that make progress feel visible."
      />

      <GlassCard accent>
        <AppText variant="caption" tone="accent">
          Current streak
        </AppText>
        <AppText variant="hero">18 days</AppText>
        <AppText tone="secondary">Keep the streak alive to unlock the mentor voice pack after the boss level.</AppText>
      </GlassCard>

      <View style={styles.grid}>
        {achievements.map((achievement) => (
          <GlassCard key={achievement.title} style={styles.card}>
            <View style={styles.medal}>
              <AppText variant="stat" tone={achievement.tone}>
                A
              </AppText>
            </View>
            <AppText variant="subtitle">{achievement.title}</AppText>
            <AppText tone="secondary">{achievement.description}</AppText>
            <AppText variant="caption" tone={achievement.state === 'Locked' ? 'secondary' : 'reward'}>
              {achievement.state}
            </AppText>
          </GlassCard>
        ))}
      </View>

      <GlassCard>
        <AppText variant="subtitle">Unlocks</AppText>
        {rewardUnlocks.map((unlock) => (
          <InfoRow
            key={unlock.title}
            label={unlock.title}
            value={unlock.unlocked ? 'Unlocked' : 'Locked'}
            meta={unlock.requirement}
            highlight={unlock.unlocked}
          />
        ))}
      </GlassCard>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  card: {
    minWidth: 210,
    flex: 1,
  },
  medal: {
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Radius.pill,
    backgroundColor: Colors.dark.backgroundSelected,
  },
});
