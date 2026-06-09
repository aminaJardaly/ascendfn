import { StyleSheet, View } from 'react-native';

import { AppScreen } from '@/components/ui/app-screen';
import { AppText } from '@/components/ui/app-text';
import { GlassCard } from '@/components/ui/glass-card';
import { achievements } from '@/data/ascend';
import { Colors, Radius, Spacing } from '@/constants/theme';

export default function RewardsScreen() {
  return (
    <AppScreen>
      <AppText variant="title">Rewards</AppText>
      <AppText tone="secondary">Badges, streaks, and unlocks that make progress feel visible.</AppText>

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
          </GlassCard>
        ))}
      </View>
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
