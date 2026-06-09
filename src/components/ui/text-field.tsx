import { StyleSheet, TextInput, View } from 'react-native';

import { AppText } from '@/components/ui/app-text';
import { getThemeColors, Radius, Spacing } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

type TextFieldProps = {
  label: string;
  placeholder: string;
  secureTextEntry?: boolean;
  multiline?: boolean;
};

export function TextField({ label, placeholder, secureTextEntry, multiline }: TextFieldProps) {
  const colors = getThemeColors(useColorScheme());

  return (
    <View style={styles.field}>
      <AppText variant="caption" tone="secondary">
        {label}
      </AppText>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.textSecondary}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        style={[
          styles.input,
          multiline && styles.multiline,
          {
            backgroundColor: colors.backgroundSelected,
            borderColor: colors.border,
            color: colors.text,
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  field: {
    gap: Spacing.one,
  },
  input: {
    minHeight: 48,
    borderWidth: 1,
    borderRadius: Radius.medium,
    borderCurve: 'continuous',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    fontSize: 15,
  },
  multiline: {
    minHeight: 110,
    textAlignVertical: 'top',
  },
});
