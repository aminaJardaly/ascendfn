import { PropsWithChildren } from 'react';
import { ScrollView, StyleSheet, useWindowDimensions, View } from 'react-native';

import { FooterNavHeight, getThemeColors, MaxContentWidth, Spacing } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

type AppScreenProps = PropsWithChildren<{
  centered?: boolean;
}>;

export function AppScreen({ centered, children }: AppScreenProps) {
  const scheme = useColorScheme();
  const colors = getThemeColors(scheme);
  const { width } = useWindowDimensions();
  const isCompact = width < 360;

  return (
    <ScrollView
      style={[styles.scroll, { backgroundColor: colors.background }]}
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={[
        styles.content,
        isCompact && styles.contentCompact,
        centered && styles.centered,
      ]}>
      <View style={styles.inner}>{children}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: Spacing.four,
    paddingTop: Spacing.four,
    paddingBottom: FooterNavHeight + Spacing.four,
  },
  contentCompact: {
    paddingHorizontal: Spacing.three,
    paddingTop: Spacing.three,
  },
  centered: {
    justifyContent: 'center',
  },
  inner: {
    width: '100%',
    maxWidth: MaxContentWidth,
    gap: Spacing.three,
  },
});
