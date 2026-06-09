import { PropsWithChildren, forwardRef } from 'react';
import { Pressable, PressableProps, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { AppText } from '@/components/ui/app-text';
import { getThemeColors, Radius, Spacing } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

type PrimaryButtonProps = PropsWithChildren<
  PressableProps & {
    variant?: 'primary' | 'ghost';
    style?: StyleProp<ViewStyle>;
  }
>;

export const PrimaryButton = forwardRef<View, PrimaryButtonProps>(function PrimaryButton(
  { children, variant = 'primary', style, ...pressableProps },
  ref,
) {
  const scheme = useColorScheme();
  const colors = getThemeColors(scheme);
  const isGhost = variant === 'ghost';

  return (
    <Pressable
      ref={ref}
      {...pressableProps}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: isGhost ? colors.backgroundSelected : colors.primary,
          borderColor: isGhost ? colors.border : colors.primary,
          opacity: pressed ? 0.75 : 1,
        },
        style,
      ]}>
      <AppText variant="caption" style={styles.label}>
        {children}
      </AppText>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  button: {
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.three,
    borderWidth: 1,
    borderRadius: Radius.pill,
  },
  label: {
    color: '#FFFFFF',
  },
});
