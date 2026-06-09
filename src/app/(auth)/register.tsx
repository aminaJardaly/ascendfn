import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { AppScreen } from '@/components/ui/app-screen';
import { AppText } from '@/components/ui/app-text';
import { GlassCard } from '@/components/ui/glass-card';
import { PrimaryButton } from '@/components/ui/primary-button';
import { TextField } from '@/components/ui/text-field';
import { Spacing } from '@/constants/theme';

export default function RegisterScreen() {
  return (
    <AppScreen centered>
      <GlassCard accent>
        <AppText variant="title">Create account</AppText>
        <AppText tone="secondary">Start with a profile, then build the first goal roadmap.</AppText>
        <TextField label="Name" placeholder="Your name" />
        <TextField label="Email" placeholder="you@example.com" />
        <TextField label="Password" placeholder="Create password" secureTextEntry />
        <Link href="/onboarding" asChild>
          <PrimaryButton>Create account</PrimaryButton>
        </Link>
        <View style={styles.links}>
          <Link href="/(auth)/login">
            <AppText tone="accent">Back to login</AppText>
          </Link>
        </View>
      </GlassCard>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  links: {
    gap: Spacing.two,
  },
});
