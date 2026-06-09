import { StyleSheet, View } from 'react-native';

import { AppScreen } from '@/components/ui/app-screen';
import { AppText } from '@/components/ui/app-text';
import { GlassCard } from '@/components/ui/glass-card';
import { PrimaryButton } from '@/components/ui/primary-button';
import { Spacing } from '@/constants/theme';
import { starterGoals } from '@/data/ascend';

export default function GoalCreationScreen() {
  return (
    <AppScreen>
      <AppText variant="title">Choose your dream</AppText>
      <AppText tone="secondary">
        The questionnaire will shape the AI roadmap, difficulty curve, and daily missions.
      </AppText>
      <View style={styles.grid}>
        {starterGoals.map((goal) => (
          <GlassCard key={goal} style={styles.goal}>
            <AppText variant="subtitle">{goal}</AppText>
            <AppText tone="secondary">30 or 60 day roadmap</AppText>
          </GlassCard>
        ))}
      </View>
      <PrimaryButton>Generate roadmap</PrimaryButton>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  goal: {
    minWidth: 180,
    flex: 1,
  },
});
