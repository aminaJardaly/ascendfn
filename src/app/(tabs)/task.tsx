import { StyleSheet, View } from 'react-native';

import { MissionCard } from '@/components/ascend/mission-card';
import { AppScreen } from '@/components/ui/app-screen';
import { AppText } from '@/components/ui/app-text';
import { GlassCard } from '@/components/ui/glass-card';
import { PrimaryButton } from '@/components/ui/primary-button';
import { dailyMissions } from '@/data/ascend';
import { Spacing } from '@/constants/theme';

export default function DailyTaskScreen() {
  return (
    <AppScreen>
      <AppText variant="title">Daily task</AppText>
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
        {dailyMissions.map((mission) => (
          <MissionCard key={mission.title} {...mission} />
        ))}
      </View>
      <PrimaryButton>Complete today</PrimaryButton>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  list: {
    gap: Spacing.two,
  },
});
