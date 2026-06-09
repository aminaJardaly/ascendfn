import { StyleSheet, View } from 'react-native';

import { MetricGrid } from '@/components/ascend/metric-grid';
import { AppScreen } from '@/components/ui/app-screen';
import { AppText } from '@/components/ui/app-text';
import { GlassCard } from '@/components/ui/glass-card';
import { profileStats } from '@/data/ascend';
import { Spacing } from '@/constants/theme';

export default function ProfileScreen() {
  return (
    <AppScreen>
      <AppText variant="title">Profile</AppText>
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
        </GlassCard>
        <GlassCard>
          <AppText variant="subtitle">Proof vault</AppText>
          <AppText tone="secondary">12 daily proof notes ready for future storage integration.</AppText>
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
