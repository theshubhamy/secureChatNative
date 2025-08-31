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
        <IconSymbol name="ArrowLeft" color={Colors[colorScheme].white} />
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
      <ThemedView style={styles.userInfo}>
        <ThemedText style={styles.userName} type="small">
          {user.name || user.phone}
        </ThemedText>
        <ThemedText style={styles.userStatus} type="small">
          online
        </ThemedText>
      </ThemedView>

      {/* Action buttons */}
      <TouchableOpacity style={styles.actionButton}>
        <IconSymbol name="PhoneCall" color={Colors[colorScheme].white} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <IconSymbol name="Video" color={Colors[colorScheme].white} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton}>
        <IconSymbol name="EllipsisVertical" color={Colors[colorScheme].white} />
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
    backgroundColor: '#ddd',
    borderRadius: 25,
  },
  userName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  userStatus: {
    color: '#d9d9d9',
    fontSize: 12,
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
