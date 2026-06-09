import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { AppScreen } from '@/components/ui/app-screen';
import { AppText } from '@/components/ui/app-text';
import { GlassCard } from '@/components/ui/glass-card';
import { PrimaryButton } from '@/components/ui/primary-button';
import { Brand, Spacing } from '@/constants/theme';

export default function LoginScreen() {
  return (
    <AppScreen centered>
      <AppText variant="hero">{Brand.name}</AppText>
      <GlassCard accent>
        <AppText variant="subtitle">Welcome back</AppText>
        <AppText tone="secondary">Auth fields will connect to Supabase in the next implementation layer.</AppText>
        <PrimaryButton>Login</PrimaryButton>
        <View style={styles.links}>
          <Link href="/(auth)/register">
            <AppText tone="accent">Create account</AppText>
          </Link>
          <Link href="/(auth)/forgot-password">
            <AppText tone="secondary">Forgot password</AppText>
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
