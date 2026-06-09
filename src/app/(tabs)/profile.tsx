import { StyleSheet, View } from 'react-native';

import { MetricGrid } from '@/components/ascend/metric-grid';
import { AppScreen } from '@/components/ui/app-screen';
import { AppText } from '@/components/ui/app-text';
import { GlassCard } from '@/components/ui/glass-card';
import { InfoRow } from '@/components/ui/info-row';
import { PageHeader } from '@/components/ui/page-header';
import { ProgressBar } from '@/components/ui/progress-bar';
import { Spacing } from '@/constants/theme';
import { profileStats, proofEntries } from '@/data/ascend';

export default function ProfileScreen() {
  return (
    <AppScreen>
      <PageHeader eyebrow="Statistics" title="Profile" description="Identity, active goal, proof history, and growth stats." />
      <GlassCard accent>
        <AppText variant="caption" tone="accent">
          Current identity
        </AppText>
        <AppText variant="subtitle">I am someone who follows through.</AppText>
        <AppText tone="secondary">
          Ascend uses progress, proof, and rewards to reinforce the person each user is becoming.
        </AppText>
      </GlassCard>
      <MetricGrid metrics={profileStats} />
      <View style={styles.stack}>
        <GlassCard>
          <AppText variant="subtitle">Active goal</AppText>
          <AppText tone="secondary">Build my first app: AI-generated 30-day roadmap.</AppText>
          <ProgressBar value={68} />
        </GlassCard>
        <GlassCard>
          <AppText variant="subtitle">Proof vault</AppText>
          {proofEntries.map((entry) => (
            <InfoRow key={entry.day} label={`Day ${entry.day}`} value={entry.type} meta={entry.title} />
          ))}
        </GlassCard>
        <GlassCard>
          <AppText variant="subtitle">Settings preview</AppText>
          <InfoRow label="Notifications" value="Daily" meta="Mission reminder at 7:30 PM." highlight />
          <InfoRow label="Roadmap length" value="30 days" meta="Can be regenerated for future journeys." />
        </GlassCard>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  stack: {
    gap: Spacing.two,
  },
});
