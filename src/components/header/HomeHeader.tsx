import React from 'react';
import { StyleSheet } from 'react-native';
import { IconSymbol } from '../ui/IconSymbol';
import { ThemedText } from '../ThemedText';
import { ThemedView } from '../ThemedView';
import { ThemedPressable } from '../ThemedPressable';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function HomeHeader({ navigation }: any) {
  const colorScheme = useColorScheme();

  function navigateToSettings() {
    navigation.navigate('Settings');
  }

  return (
    <ThemedView
      style={{
        ...styles.container,
        backgroundColor: Colors[colorScheme].primary,
      }}
    >
      {/* App Title */}
      <ThemedText type="title" style={styles.title}>
        SecureChat
      </ThemedText>

      {/* Settings Icon */}
      <ThemedPressable onPress={navigateToSettings} colorName="primary">
        <IconSymbol name="EllipsisVertical" color={Colors[colorScheme].white} />
      </ThemedPressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  title: {
    color: '#fff', // ✅ White title (same as headerTintColor)
    fontSize: 22,
    fontWeight: 'bold',
  },
});
