import { StyleSheet } from 'react-native';
import React from 'react';
import { ThemedPressable } from './ThemedPressable';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { formatDateStatus } from '@/utils/date';
import { UserWithLastMsg } from '@/constants/users';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IconSymbol } from './ui/IconSymbol';
import { Colors } from '@/constants/Colors';

type RootStackParamList = {
  Chat: { user: UserWithLastMsg };
  // add other routes here if needed
};

const UserListItem = ({ user }: { user: UserWithLastMsg }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  function navigateToChat(): void {
    navigation.navigate('Chat', { user });
  }

  return (
    <ThemedPressable style={styles.container} onPress={() => navigateToChat()}>
      <ThemedView style={styles.iconContainer}>
        <IconSymbol name="UserRound" color={Colors.light.primary} />
      </ThemedView>
      <ThemedView style={styles.listContainer}>
        <ThemedView style={styles.userView}>
          <ThemedText type="subtitle">{user.name || user.phone}</ThemedText>
          <ThemedText type="small">
            {formatDateStatus(new Date(user.lastMsg.timestamp))}
          </ThemedText>
        </ThemedView>
        <ThemedText type="small">{user.lastMsg.text}</ThemedText>
      </ThemedView>
    </ThemedPressable>
  );
};

export default UserListItem;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: 'row',
  },
  listContainer: {
    flex: 1,
  },
  iconContainer: {
    marginRight: 10,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: Colors.light.primary,
  },
  userView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
});
