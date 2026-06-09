import { StyleSheet, View } from 'react-native';

import { MissionCard } from '@/components/ascend/mission-card';
import { AppScreen } from '@/components/ui/app-screen';
import { AppText } from '@/components/ui/app-text';
import { GlassCard } from '@/components/ui/glass-card';
import { InfoRow } from '@/components/ui/info-row';
import { PageHeader } from '@/components/ui/page-header';
import { PrimaryButton } from '@/components/ui/primary-button';
import { TextField } from '@/components/ui/text-field';
import { Spacing } from '@/constants/theme';
import { dailyMissions, sideChallenges } from '@/data/ascend';

export default function DailyTaskScreen() {
  return (
    <AppScreen>
      <PageHeader
        eyebrow="Day 12"
        title="Daily task"
        description="Complete the core mission, capture proof, and add one optional challenge if energy is high."
      />
      <GlassCard accent>
        <AppText variant="caption" tone="accent">
          AI mentor
        </AppText>
        <AppText variant="subtitle">Momentum beats intensity today.</AppText>
        <AppText tone="secondary">
          Complete the smallest useful version of the task, capture proof, and let the streak compound.
        </AppText>
      </GlassCard>

      <View style={styles.list}>
        <AppText variant="subtitle">Mission stack</AppText>
        {dailyMissions.map((mission) => (
          <MissionCard key={mission.title} {...mission} />
        ))}
      </View>

      <GlassCard>
        <AppText variant="subtitle">Side challenges</AppText>
        {sideChallenges.map((challenge) => (
          <InfoRow
            key={challenge.title}
            label={challenge.title}
            value={challenge.reward}
            meta={challenge.difficulty}
          />
        ))}
      </GlassCard>

      <GlassCard>
        <AppText variant="subtitle">Proof submission</AppText>
        <TextField label="Proof note" placeholder="What did you complete today?" multiline />
        <TextField label="Proof link" placeholder="Paste a link or filename" />
      </GlassCard>
      <PrimaryButton>Complete today</PrimaryButton>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  list: {
    gap: Spacing.two,
  },
});
