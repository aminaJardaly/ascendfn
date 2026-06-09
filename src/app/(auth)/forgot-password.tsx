import { Link } from 'expo-router';

import { AppScreen } from '@/components/ui/app-screen';
import { AppText } from '@/components/ui/app-text';
import { GlassCard } from '@/components/ui/glass-card';
import { PrimaryButton } from '@/components/ui/primary-button';
import { TextField } from '@/components/ui/text-field';

export default function ForgotPasswordScreen() {
  return (
    <AppScreen centered>
      <GlassCard>
        <AppText variant="title">Reset password</AppText>
        <AppText tone="secondary">Enter the email connected to your Ascend profile.</AppText>
        <TextField label="Email" placeholder="you@example.com" />
        <PrimaryButton>Send reset link</PrimaryButton>
        <Link href="/(auth)/login">
          <AppText tone="accent">Back to login</AppText>
        </Link>
      </GlassCard>
    </AppScreen>
  );
}
