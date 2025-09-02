import React, { useState } from 'react';
import { TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { ThemedView } from './ThemedView';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput = ({ onSendMessage, disabled }: ChatInputProps) => {
  const [message, setMessage] = useState('');
  const colorScheme = useColorScheme();

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  return (
    <ThemedView
      style={{
        ...styles.container,
        backgroundColor: Colors[colorScheme].backgroundPaper,
      }}
    >
      <TouchableOpacity>
        <IconSymbol name="Paperclip" />
      </TouchableOpacity>

      <TextInput
        style={{
          ...styles.input,
          backgroundColor: Colors[colorScheme].background,
          color: Colors[colorScheme].textPrimary,
        }}
        value={message}
        selectionColor={Colors[colorScheme].primary}
        cursorColor={Colors[colorScheme].primary}
        onChangeText={setMessage}
        placeholder="Type a message..."
        editable={!disabled}
        placeholderTextColor={Colors[colorScheme].textPrimary}
      />

      <TouchableOpacity
        onPress={handleSend}
        disabled={!message.trim() || disabled}
      >
        <IconSymbol
          name="Send"
          color={message.trim() ? Colors[colorScheme].primary : ''}
        />
      </TouchableOpacity>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,

    gap: 12,
  },
  input: {
    flex: 1,
    borderRadius: 100,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 16,
  },
});
