import { StyleSheet, View } from 'react-native';

import { AppScreen } from '@/components/ui/app-screen';
import { AppText } from '@/components/ui/app-text';
import { GlassCard } from '@/components/ui/glass-card';
import { roadmapMilestones } from '@/data/ascend';
import { Colors, Radius, Spacing } from '@/constants/theme';

export default function RoadmapScreen() {
  return (
    <AppScreen>
      <AppText variant="title">AI roadmap</AppText>
      <AppText tone="secondary">A balanced 30-day progression from identity, to proof, to public milestone.</AppText>

      <View style={styles.timeline}>
        {roadmapMilestones.map((item) => (
          <GlassCard key={item.day}>
            <View style={styles.row}>
              <View style={styles.day}>
                <AppText variant="caption" tone="accent">
                  Day
                </AppText>
                <AppText variant="stat">{item.day}</AppText>
              </View>
              <View style={styles.copy}>
                <AppText variant="subtitle">{item.title}</AppText>
                <AppText tone="secondary">{item.description}</AppText>
                <AppText variant="caption" tone="reward">
                  +{item.xp} XP
                </AppText>
              </View>
            </View>
          </GlassCard>
        ))}
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  timeline: {
    gap: Spacing.two,
  },
  row: {
    flexDirection: 'row',
    gap: Spacing.three,
  },
  day: {
    width: 72,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Radius.medium,
    backgroundColor: Colors.dark.backgroundSelected,
    padding: Spacing.two,
  },
  copy: {
    flex: 1,
    gap: Spacing.one,
  },
});
