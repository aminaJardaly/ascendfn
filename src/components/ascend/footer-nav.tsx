import { Link, usePathname } from 'expo-router';
import type { ComponentProps } from 'react';
import { Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

import { AppText } from '@/components/ui/app-text';
import { Colors, FooterNavHeight, Radius, Spacing } from '@/constants/theme';

type FooterNavItem = {
  href: ComponentProps<typeof Link>['href'];
  icon: string;
  label: string;
  match: string;
};

const navItems: FooterNavItem[] = [
  { href: '/(tabs)', icon: '⌂', label: 'Home', match: '/' },
  { href: '/(tabs)/roadmap', icon: '⌁', label: 'Road', match: '/roadmap' },
  { href: '/(tabs)/task', icon: '✓', label: 'Task', match: '/task' },
  { href: '/(tabs)/rewards', icon: '◇', label: 'Rewards', match: '/rewards' },
  { href: '/(tabs)/profile', icon: '○', label: 'Profile', match: '/profile' },
];

export function FooterNav() {
  const pathname = usePathname();
  const { width } = useWindowDimensions();
  const isCompact = width < 360;
  const isWidePhone = width >= 430;

  return (
    <View style={[styles.shell, isCompact && styles.shellCompact]}>
      <View style={[styles.bar, isCompact && styles.barCompact, isWidePhone && styles.barWidePhone]}>
        {navItems.map((item) => {
          const isActive = item.match === '/' ? pathname === '/' : pathname === item.match;

          return (
            <View key={item.label} style={styles.slot}>
              <Link href={item.href} asChild>
                <Pressable
                  accessibilityRole="button"
                  accessibilityState={{ selected: isActive }}
                  style={({ pressed }) => [
                    styles.item,
                    isCompact && styles.itemCompact,
                    pressed && styles.itemPressed,
                  ]}>
                  <View style={[styles.indicator, isCompact && styles.indicatorCompact]}>
                    <Text
                      allowFontScaling={false}
                      style={[styles.iconText, isCompact && styles.iconTextCompact, isActive && styles.iconTextActive]}>
                      {item.icon}
                    </Text>
                  </View>
                  <AppText
                    variant="caption"
                    tone={isActive ? 'accent' : 'secondary'}
                    style={[styles.label, isCompact && styles.labelCompact, isActive && styles.labelActive]}
                    numberOfLines={1}>
                    {item.label}
                  </AppText>
                </Pressable>
              </Link>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  shell: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    minHeight: FooterNavHeight,
    paddingHorizontal: Spacing.three,
    paddingTop: Spacing.two,
    paddingBottom: Spacing.three,
    backgroundColor: 'transparent',
  },
  shellCompact: {
    paddingHorizontal: Spacing.two,
    paddingBottom: Spacing.two,
  },
  bar: {
    width: '100%',
    maxWidth: 430,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.one,
    paddingHorizontal: Spacing.one,
    paddingVertical: Spacing.two,
    borderWidth: 1,
    borderColor: Colors.dark.border,
    borderRadius: 30,
    borderCurve: 'continuous',
    backgroundColor: 'rgba(26, 29, 38, 0.98)',
    boxShadow: '0 14px 36px rgba(0, 0, 0, 0.34)',
  },
  barCompact: {
    gap: Spacing.half,
    paddingHorizontal: Spacing.half,
    borderRadius: 26,
  },
  barWidePhone: {
    maxWidth: 460,
  },
  slot: {
    flex: 1,
    minWidth: 0,
  },
  item: {
    width: '100%',
    minHeight: 62,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.one,
    borderRadius: Radius.large,
    borderCurve: 'continuous',
    paddingHorizontal: Spacing.one,
  },
  itemCompact: {
    minHeight: 58,
  },
  itemPressed: {
    opacity: 0.72,
  },
  indicator: {
    width: '100%',
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Radius.pill,
    backgroundColor: 'transparent',
  },
  indicatorCompact: {
    height: 24,
  },
  iconText: {
    width: '100%',
    color: Colors.dark.textSecondary,
    fontSize: 22,
    lineHeight: 24,
    fontWeight: '800',
    textAlign: 'center',
  },
  iconTextCompact: {
    fontSize: 20,
    lineHeight: 22,
  },
  iconTextActive: {
    color: Colors.dark.accent,
  },
  label: {
    width: '100%',
    textAlign: 'center',
    fontSize: 11,
    lineHeight: 13,
    fontWeight: '700',
    textTransform: 'none',
  },
  labelCompact: {
    fontSize: 10,
    lineHeight: 12,
  },
  labelActive: {
    color: Colors.dark.accent,
  },
});
