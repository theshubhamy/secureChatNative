import { View, Text } from 'react-native';
import React from 'react';

const Chat = ({ route }) => {
  // user as props
  const { user } = route.params;

  const chatMessages = [];

  return (
    <View>
      <Text>Chat</Text>
    </View>
  );
};

export default Chat;
