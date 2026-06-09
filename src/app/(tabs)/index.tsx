import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { MetricGrid } from '@/components/ascend/metric-grid';
import { MissionCard } from '@/components/ascend/mission-card';
import { AppScreen } from '@/components/ui/app-screen';
import { AppText } from '@/components/ui/app-text';
import { GlassCard } from '@/components/ui/glass-card';
import { InfoRow } from '@/components/ui/info-row';
import { PrimaryButton } from '@/components/ui/primary-button';
import { ProgressBar } from '@/components/ui/progress-bar';
import { Brand, Colors, Radius, Spacing } from '@/constants/theme';
import { dailyMissions, leagueChallenges, profileStats, proofEntries } from '@/data/ascend';

export default function HomeDashboard() {
  return (
    <AppScreen>
      <View style={styles.heroCard}>
        <View style={styles.heroCopy}>
          <AppText variant="caption" tone="accent">
            Level 12 dream builder
          </AppText>
          <AppText variant="hero">{Brand.name}</AppText>
          <AppText tone="secondary">{Brand.tagline}</AppText>
        </View>
        <View style={styles.orbit}>
          <AppText variant="stat" tone="accent">
            A
          </AppText>
        </View>
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

      <GlassCard>
        <AppText variant="subtitle">League challenge</AppText>
        {leagueChallenges.map((challenge) => (
          <InfoRow
            key={challenge.title}
            label={challenge.title}
            value={challenge.reward}
            meta={challenge.description}
            highlight={challenge.title === 'Consistency Sprint'}
          />
        ))}
      </GlassCard>

      <GlassCard>
        <AppText variant="subtitle">Latest proof</AppText>
        {proofEntries.slice(0, 2).map((proof) => (
          <InfoRow key={proof.day} label={`Day ${proof.day}`} value={proof.type} meta={proof.title} />
        ))}
      </GlassCard>

      <View style={styles.actions}>
        <Link href="/(tabs)/task" asChild>
          <PrimaryButton>Start mission</PrimaryButton>
        </Link>
        <Link href="/goal-creation" asChild>
          <PrimaryButton variant="ghost">Plan new goal</PrimaryButton>
        </Link>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  heroCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    paddingTop: Spacing.three,
    paddingBottom: Spacing.two,
  },
  heroCopy: {
    flex: 1,
    gap: Spacing.two,
  },
  orbit: {
    width: 86,
    height: 86,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Radius.pill,
    backgroundColor: Colors.dark.backgroundElement,
    borderWidth: 1,
    borderColor: Colors.dark.accent,
    boxShadow: `0 0 28px ${Colors.dark.primary}66`,
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
