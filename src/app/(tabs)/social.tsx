import { StyleSheet, View } from 'react-native';

import { AppScreen } from '@/components/ui/app-screen';
import { AppText } from '@/components/ui/app-text';
import { GlassCard } from '@/components/ui/glass-card';
import { leaderboard } from '@/data/ascend';
import { Spacing } from '@/constants/theme';

export default function SocialScreen() {
  return (
    <AppScreen>
      <AppText variant="title">Rankings</AppText>
      <AppText tone="secondary">Weekly leagues and friendly competition for consistency.</AppText>

      {leaderboard.map((entry) => (
        <GlassCard key={entry.name} accent={entry.name === 'You'}>
          <View style={styles.row}>
            <AppText variant="stat" tone={entry.name === 'You' ? 'accent' : 'primary'}>
              #{entry.rank}
            </AppText>
            <View style={styles.copy}>
              <AppText variant="subtitle">{entry.name}</AppText>
              <AppText tone="secondary">{entry.league} league</AppText>
            </View>
            <AppText variant="caption" tone="reward">
              {entry.xp}
            </AppText>
          </View>
        </GlassCard>
      ))}
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
  },
  copy: {
    flex: 1,
  },
});
