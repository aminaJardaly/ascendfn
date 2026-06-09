import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { AppScreen } from '@/components/ui/app-screen';
import { AppText } from '@/components/ui/app-text';
import { GlassCard } from '@/components/ui/glass-card';
import { OptionCard } from '@/components/ui/option-card';
import { PageHeader } from '@/components/ui/page-header';
import { PrimaryButton } from '@/components/ui/primary-button';
import { TextField } from '@/components/ui/text-field';
import { Spacing } from '@/constants/theme';
import { starterGoals } from '@/data/ascend';

export default function GoalCreationScreen() {
  return (
    <AppScreen>
      <PageHeader
        eyebrow="Dream setup"
        title="Create a journey"
        description="Choose a goal, define the why, and prepare the AI roadmap generator."
      />
      <View style={styles.grid}>
        {starterGoals.map((goal, index) => (
          <OptionCard
            key={goal.title}
            title={goal.title}
            description={goal.description}
            meta={goal.path}
            selected={index === 0}
          />
        ))}
      </View>
      <GlassCard>
        <AppText variant="subtitle">Personalize it</AppText>
        <TextField label="Dream statement" placeholder="I want to build my first app..." multiline />
        <TextField label="Main blocker" placeholder="Time, confidence, structure..." />
      </GlassCard>
      <View style={styles.actions}>
        <Link href="/onboarding" asChild>
          <PrimaryButton>Continue questionnaire</PrimaryButton>
        </Link>
        <Link href="/(tabs)/roadmap" asChild>
          <PrimaryButton variant="ghost">Preview roadmap</PrimaryButton>
        </Link>
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
  actions: {
    gap: Spacing.two,
  },
});
