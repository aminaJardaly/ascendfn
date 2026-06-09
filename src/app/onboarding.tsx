import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { AppScreen } from '@/components/ui/app-screen';
import { GlassCard } from '@/components/ui/glass-card';
import { OptionCard } from '@/components/ui/option-card';
import { PageHeader } from '@/components/ui/page-header';
import { PrimaryButton } from '@/components/ui/primary-button';
import { TextField } from '@/components/ui/text-field';
import { Spacing } from '@/constants/theme';
import { onboardingQuestions } from '@/data/ascend';

export default function OnboardingScreen() {
  return (
    <AppScreen>
      <PageHeader
        eyebrow="Questionnaire"
        title="Shape your first ascent"
        description="A short setup for roadmap length, difficulty, motivation, and daily mission style."
      />

      {onboardingQuestions.map((question) => (
        <GlassCard key={question.label}>
          <PageHeader eyebrow={question.label} title={question.prompt} />
          <View style={styles.options}>
            {question.options.map((option, index) => (
              <OptionCard key={option} title={option} selected={index === 1 || (question.label === 'Primary dream' && index === 0)} />
            ))}
          </View>
        </GlassCard>
      ))}

      <GlassCard>
        <TextField label="Motivation" placeholder="Why does this matter now?" multiline />
        <TextField label="Available time" placeholder="Example: 30 minutes after work" />
      </GlassCard>

      <View style={styles.actions}>
        <Link href="/(tabs)" asChild>
          <PrimaryButton>Generate roadmap</PrimaryButton>
        </Link>
        <Link href="/goal-creation" asChild>
          <PrimaryButton variant="ghost">Back to goals</PrimaryButton>
        </Link>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  options: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  actions: {
    gap: Spacing.two,
  },
});
