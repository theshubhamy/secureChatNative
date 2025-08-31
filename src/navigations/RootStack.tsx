/* eslint-disable react/no-unstable-nested-components */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Chat from '../screens/Chat';
import AudioCall from '../screens/AudioCall';
import VideoCall from '../screens/VideoCall';
import ChatHeader from '@/components/header/ChatHeader';
import HomeHeader from '@/components/header/HomeHeader';

type RootStackParamList = {
  Home: undefined;
  Chat: { user: any };
  AudioCall: undefined;
  VideoCall: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        animation: 'slide_from_right',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
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
      <Stack.Screen name="AudioCall" component={AudioCall} />
      <Stack.Screen name="VideoCall" component={VideoCall} />
    </Stack.Navigator>
  );
}
