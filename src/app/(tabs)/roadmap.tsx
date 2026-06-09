import { StyleSheet, View } from 'react-native';

import { AppScreen } from '@/components/ui/app-screen';
import { AppText } from '@/components/ui/app-text';
import { GlassCard } from '@/components/ui/glass-card';
import { InfoRow } from '@/components/ui/info-row';
import { PageHeader } from '@/components/ui/page-header';
import { ProgressBar } from '@/components/ui/progress-bar';
import { Colors, Radius, Spacing } from '@/constants/theme';
import { roadmapMilestones, roadmapPhases } from '@/data/ascend';

export default function RoadmapScreen() {
  return (
    <AppScreen>
      <PageHeader
        eyebrow="AI roadmap"
        title="Build my first app"
        description="A balanced 30-day progression from identity, to proof, to public milestone."
      />

      <GlassCard accent>
        <View style={styles.row}>
          <View style={styles.copy}>
            <AppText variant="subtitle">Roadmap health</AppText>
            <AppText tone="secondary">12 days completed, 18 days remaining, next boss level unlocks on day 15.</AppText>
          </View>
          <AppText variant="stat" tone="accent">
            68%
          </AppText>
        </View>
        <ProgressBar value={68} />
      </GlassCard>

      <View style={styles.phaseGrid}>
        {roadmapPhases.map((phase) => (
          <GlassCard key={phase.title} style={styles.phase}>
            <AppText variant="caption" tone="accent">
              {phase.range}
            </AppText>
            <AppText variant="subtitle">{phase.title}</AppText>
            <AppText tone="secondary">{phase.focus}</AppText>
            <ProgressBar value={phase.progress} />
          </GlassCard>
        ))}
      </View>

      <View style={styles.timeline}>
        <AppText variant="subtitle">Milestones</AppText>
        {roadmapMilestones.map((item) => (
          <GlassCard key={item.day}>
            <View style={styles.row}>
              <View style={styles.day}>
                <AppText variant="caption" tone="accent">
                  Day
                </AppText>
                <AppText variant="stat">{item.day}</AppText>
              </View>
              <View style={styles.copy}>
                <AppText variant="subtitle">{item.title}</AppText>
                <AppText tone="secondary">{item.description}</AppText>
                <AppText variant="caption" tone="reward">
                  +{item.xp} XP
                </AppText>
              </View>
            </View>
          </GlassCard>
        ))}
      </View>

      <GlassCard>
        <AppText variant="subtitle">Adaptive engine</AppText>
        <InfoRow label="Difficulty" value="Balanced" meta="Missions rise when completion stays above 80%." highlight />
        <InfoRow label="Proof type" value="Mixed" meta="Notes, screenshots, links, and final deliverables." />
      </GlassCard>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  timeline: {
    gap: Spacing.two,
  },
  phaseGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  phase: {
    minWidth: 210,
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
  },
  day: {
    width: 72,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Radius.medium,
    backgroundColor: Colors.dark.backgroundSelected,
    padding: Spacing.two,
  },
  copy: {
    flex: 1,
    gap: Spacing.one,
  },
});
