import { Slot } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { FooterNav } from '@/components/ascend/footer-nav';
import { Colors } from '@/constants/theme';

export default function AppTabsLayout() {
  return (
    <View style={styles.container}>
      <Slot />
      <FooterNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background,
  },
});
