/* eslint-disable react-native/no-inline-styles */
import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import { ChatMessage } from '@/components/ChatMessage';
import { ChatInput } from '@/components/ChatInput';
import { ThemedView } from '@/components/ThemedView';
interface Message {
  id: string;
  message: string;
  timestamp: string;
  isOwn: boolean;
  senderName: string;
  senderAvatar?: any;
}

export const Chat = ({ route }: any) => {
  const { user } = route.params;
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      message: "Hey there! How's your day going?",
      timestamp: '2:34 PM',
      isOwn: false,
      senderName: user?.name,
      senderAvatar: user?.avatar,
    },
    {
      id: '2',
      message:
        "Hi Sarah! It's been pretty good, thanks for asking. Working on some exciting projects.",
      timestamp: '2:35 PM',
      isOwn: true,
      senderName: 'You',
      senderAvatar: user?.avatar,
    },
  ]);

  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      message: text,
      timestamp: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
      isOwn: true,
      senderName: 'You',
      senderAvatar: user?.avatar,
    };
    setMessages(prev => [...prev, newMessage]);

    setTimeout(() => {
      const reply: Message = {
        id: (Date.now() + 1).toString(),
        message: 'That looks incredible! 🎉',
        timestamp: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
        isOwn: false,
        senderName: user.name,
        senderAvatar: user.avatar,
      };
      setMessages(prev => [...prev, reply]);
    }, 1500);
  };

  return (
    <ThemedView style={styles.container}>
      {/* Messages */}
      <ScrollView
        ref={scrollViewRef}
        style={styles.messages}
        contentContainerStyle={{ padding: 10 }}
      >
        {messages.map(msg => (
          <ChatMessage key={msg.id} {...msg} />
        ))}
      </ScrollView>

      {/* Input */}
      <ChatInput onSendMessage={handleSendMessage} />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },

  userStatus: { fontSize: 12, color: 'gray' },
  actions: { flexDirection: 'row', gap: 12 },
  messages: { flex: 1 },
});

export default Chat;
