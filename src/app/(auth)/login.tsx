import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { AppScreen } from '@/components/ui/app-screen';
import { AppText } from '@/components/ui/app-text';
import { GlassCard } from '@/components/ui/glass-card';
import { InfoRow } from '@/components/ui/info-row';
import { PrimaryButton } from '@/components/ui/primary-button';
import { TextField } from '@/components/ui/text-field';
import { Brand, Spacing } from '@/constants/theme';
import { authHighlights } from '@/data/ascend';

export default function LoginScreen() {
  return (
    <AppScreen centered>
      <View style={styles.brand}>
        <AppText variant="hero">{Brand.name}</AppText>
        <AppText tone="secondary">{Brand.tagline}</AppText>
      </View>
      <GlassCard accent>
        <AppText variant="subtitle">Welcome back</AppText>
        <TextField label="Email" placeholder="you@example.com" />
        <TextField label="Password" placeholder="Enter password" secureTextEntry />
        <Link href="/(tabs)" asChild>
          <PrimaryButton>Login</PrimaryButton>
        </Link>
        <View style={styles.links}>
          <Link href="/(auth)/register">
            <AppText tone="accent">Create account</AppText>
          </Link>
          <Link href="/(auth)/forgot-password">
            <AppText tone="secondary">Forgot password</AppText>
          </Link>
        </View>
      </GlassCard>
      <GlassCard>
        <AppText variant="subtitle">Your growth system</AppText>
        {authHighlights.map((highlight) => (
          <InfoRow key={highlight} label={highlight} value="Included" />
        ))}
      </GlassCard>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  brand: {
    gap: Spacing.two,
  },
  links: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
});
