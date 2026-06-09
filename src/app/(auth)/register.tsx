import { Link } from 'expo-router';

import { AppScreen } from '@/components/ui/app-screen';
import { AppText } from '@/components/ui/app-text';
import { GlassCard } from '@/components/ui/glass-card';
import { PrimaryButton } from '@/components/ui/primary-button';

export default function RegisterScreen() {
  return (
    <AppScreen centered>
      <GlassCard accent>
        <AppText variant="title">Create account</AppText>
        <AppText tone="secondary">Profile creation, goals, and progress tracking will start here.</AppText>
        <PrimaryButton>Create account</PrimaryButton>
        <Link href="/(auth)/login">
          <AppText tone="accent">Back to login</AppText>
        </Link>
      </GlassCard>
    </AppScreen>
  );
}
