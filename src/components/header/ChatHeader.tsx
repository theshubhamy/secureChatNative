import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import { IconSymbol } from '../ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { ThemedView } from '../ThemedView';
import { ThemedText } from '../ThemedText';
type ChatHeaderProps = {
  navigation: { goBack: () => void };
  user: {
    avatar: string;
    name: string;
    phone: string;
  };
};

export default function ChatHeader({ navigation, user }: ChatHeaderProps) {
  const colorScheme = useColorScheme();

  return (
    <ThemedView
      style={{
        ...styles.container,
        backgroundColor: Colors[colorScheme].primary,
      }}
    >
      {/* Back button */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <IconSymbol name="ArrowLeft" />
      </TouchableOpacity>

      {/* User avatar */}
      <ThemedView style={styles.iconContainer}>
        {user.avatar === '' ? (
          <Image source={{ uri: user.avatar }} />
        ) : (
          <IconSymbol name="UserRound" color={Colors[colorScheme].primary} />
        )}
      </ThemedView>

      {/* User info */}
      <ThemedView
        style={{
          ...styles.userInfo,
          backgroundColor: Colors[colorScheme].primary,
        }}
      >
        <ThemedText type="defaultSemiBold">
          {user.name || user.phone}
        </ThemedText>
        <ThemedText type="xsmall">online</ThemedText>
      </ThemedView>

      {/* Action buttons */}
      <TouchableOpacity style={styles.actionButton}>
        <IconSymbol name="PhoneCall" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <IconSymbol name="Video" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <IconSymbol name="EllipsisVertical" />
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  userInfo: {
    flex: 1,
  },
  iconContainer: {
    marginHorizontal: 10,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: Colors.light.primary,
  },

  actionButton: {
    marginHorizontal: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
