import { Link } from 'expo-router';

import { AppScreen } from '@/components/ui/app-screen';
import { AppText } from '@/components/ui/app-text';
import { GlassCard } from '@/components/ui/glass-card';
import { PrimaryButton } from '@/components/ui/primary-button';

export default function ForgotPasswordScreen() {
  return (
    <AppScreen centered>
      <GlassCard>
        <AppText variant="title">Reset password</AppText>
        <AppText tone="secondary">This screen is ready for the authentication email flow.</AppText>
        <PrimaryButton>Send reset link</PrimaryButton>
        <Link href="/(auth)/login">
          <AppText tone="accent">Back to login</AppText>
        </Link>
      </GlassCard>
    </AppScreen>
  );
}
