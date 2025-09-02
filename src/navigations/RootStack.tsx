/* eslint-disable react/no-unstable-nested-components */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '@/screens/Home';
import Chat from '@/screens/Chat';
import AudioCall from '@/screens/AudioCall';
import VideoCall from '@/screens/VideoCall';
import ChatHeader from '@/components/header/ChatHeader';
import HomeHeader from '@/components/header/HomeHeader';
import type { RootStackParamList } from '@/navigations/types';
import Settings from '@/screens/Settings';
import Profile from '@/screens/Profile';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          header: () => <HomeHeader navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={({ navigation, route }) => ({
          header: () => (
            <ChatHeader navigation={navigation} user={route?.params?.user} />
          ),
        })}
      />
      <Stack.Screen
        name="AudioCall"
        component={AudioCall}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VideoCall"
        component={VideoCall}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
