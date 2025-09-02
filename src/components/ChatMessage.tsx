import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
interface ChatMessageProps {
  id: string;
  message: string;
  timestamp: string;
  isOwn: boolean;
  senderName: string;
  senderAvatar?: any;
}

export const ChatMessage = ({
  message,
  timestamp,
  isOwn,
}: ChatMessageProps) => {
  const colorScheme = useColorScheme();
  return (
    <ThemedView
      style={[
        styles.container,
        isOwn ? styles.ownMessage : styles.otherMessage,
      ]}
    >
      <ThemedView
        style={[
          styles.bubble,
          isOwn
            ? {
                ...styles.bubbleOwn,
                backgroundColor: Colors[colorScheme].primary,
              }
            : {
                ...styles.bubbleOther,
                backgroundColor: Colors[colorScheme].secondary,
              },
        ]}
      >
        <ThemedText type="small">{message}</ThemedText>
        <ThemedText type="xsmall" style={styles.time}>
          {timestamp}
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row', marginBottom: 10, alignItems: 'flex-end' },
  ownMessage: { justifyContent: 'flex-end' },
  otherMessage: { justifyContent: 'flex-start' },
  avatar: { width: 30, height: 30, borderRadius: 15, marginRight: 8 },
  bubble: {
    maxWidth: '70%',
    padding: 10,
    borderRadius: 12,
  },
  bubbleOwn: {
    marginLeft: 'auto',
    borderTopRightRadius: 0,
  },
  bubbleOther: {
    borderTopLeftRadius: 0,
  },
  time: { marginTop: 4, alignSelf: 'flex-end' },
});
