import { StyleSheet, View } from 'react-native';

import { AppScreen } from '@/components/ui/app-screen';
import { AppText } from '@/components/ui/app-text';
import { GlassCard } from '@/components/ui/glass-card';
import { InfoRow } from '@/components/ui/info-row';
import { PageHeader } from '@/components/ui/page-header';
import { Spacing } from '@/constants/theme';
import { leaderboard, leagueChallenges } from '@/data/ascend';

export default function SocialScreen() {
  return (
    <AppScreen>
      <PageHeader
        eyebrow="Diamond league"
        title="Rankings"
        description="Weekly leagues and friendly competition for consistency."
      />

      <GlassCard accent>
        <AppText variant="subtitle">Your position</AppText>
        <View style={styles.row}>
          <AppText variant="hero" tone="accent">
            #3
          </AppText>
          <View style={styles.copy}>
            <AppText variant="subtitle">Promotion zone</AppText>
            <AppText tone="secondary">Finish the week in the top 3 to keep the diamond frame.</AppText>
          </View>
        </View>
      </GlassCard>

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

      <GlassCard>
        <AppText variant="subtitle">League challenges</AppText>
        {leagueChallenges.map((challenge) => (
          <InfoRow key={challenge.title} label={challenge.title} value={challenge.reward} meta={challenge.description} />
        ))}
      </GlassCard>
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
