import { Link } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

import { MetricGrid } from '@/components/ascend/metric-grid';
import { MissionCard } from '@/components/ascend/mission-card';
import { AppScreen } from '@/components/ui/app-screen';
import { AppText } from '@/components/ui/app-text';
import { GlassCard } from '@/components/ui/glass-card';
import { PrimaryButton } from '@/components/ui/primary-button';
import { ProgressBar } from '@/components/ui/progress-bar';
import { Brand, Spacing } from '@/constants/theme';
import { dailyMissions, profileStats } from '@/data/ascend';

export default function HomeDashboard() {
  return (
    <AppScreen>
      <View style={styles.hero}>
        <AppText variant="caption" tone="accent">
          Level 12 dream builder
        </AppText>
        <AppText variant="hero">{Brand.name}</AppText>
        <AppText tone="secondary">{Brand.tagline}</AppText>
      </View>

      <GlassCard accent>
        <View style={styles.row}>
          <View style={styles.flex}>
            <AppText variant="subtitle">Build my first app</AppText>
            <AppText tone="secondary">Day 12 of 30. Today is about turning structure into visible progress.</AppText>
          </View>
          <AppText variant="stat" tone="reward">
            68%
          </AppText>
        </View>
        <ProgressBar value={68} />
      </GlassCard>

      <MetricGrid metrics={profileStats} />

      <View style={styles.section}>
        <AppText variant="subtitle">Today&apos;s missions</AppText>
        {dailyMissions.slice(0, 2).map((mission) => (
          <MissionCard key={mission.title} {...mission} />
        ))}
      </View>

      <View style={styles.actions}>
        <Link href="/(tabs)/task" asChild>
          <Pressable>
            <PrimaryButton>Start mission</PrimaryButton>
          </Pressable>
        </Link>
        <Link href="./goal-creation" asChild>
          <Pressable>
            <PrimaryButton variant="ghost">Plan new goal</PrimaryButton>
          </Pressable>
        </Link>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  hero: {
    gap: Spacing.two,
    paddingTop: Spacing.three,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
  },
  flex: {
    flex: 1,
    gap: Spacing.one,
  },
  section: {
    gap: Spacing.two,
  },
  actions: {
    gap: Spacing.two,
  },
});
