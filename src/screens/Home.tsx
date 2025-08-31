import { StyleSheet } from 'react-native';
import React from 'react';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { users } from '@/constants/users';
import UserListItem from '@/components/UserListItem';
import { FlashList } from '@shopify/flash-list';

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <FlashList
        data={users}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <UserListItem user={item} />}
        keyExtractor={item => item.id}
        ListFooterComponent={
          <ThemedText type="small" style={styles.footer}>
            🔒 Your personal messages are end-to-end encrypted
          </ThemedText>
        }
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    textAlign: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
});

export default Home;
