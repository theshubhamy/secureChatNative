/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { StyleSheet } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';
const AudioCall = ({ route }: any) => {
  const { user } = route.params;
  return (
    <ThemedView style={styles.container}>
      {/* header */}
      <ThemedView style={styles.header}>
        <ThemedText type="title">{user.name || user.phone}</ThemedText>
        <ThemedText type="small">Calling...</ThemedText>
      </ThemedView>
      <ThemedView style={styles.body}>
        <ThemedView style={styles.iconContainer}>
          <IconSymbol name="User" size={100} />
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.footer}>
        <ThemedView style={styles.icon}>
          <IconSymbol name="Ellipsis" />
        </ThemedView>

        <ThemedView style={styles.icon}>
          <IconSymbol name="Volume2" />
        </ThemedView>
        <ThemedView style={styles.icon}>
          <IconSymbol name="Mic" />
        </ThemedView>
        <ThemedView style={{ ...styles.icon, backgroundColor: '#ff0000' }}>
          <IconSymbol name="PhoneOff" />
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    padding: 16,
  },
  body: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  iconContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 100,
  },
  footer: {
    margin: 40,
    padding: 16,
    borderColor: 'gray',
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  icon: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
});

export default AudioCall;
