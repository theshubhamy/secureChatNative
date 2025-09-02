import { StatusBar } from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './navigations/RootStack';
import SessionProvider from '@/context/index';
import { useColorScheme } from '@/hooks/useColorScheme';
import { MenuProvider } from 'react-native-popup-menu';
function App() {
  const colorScheme = useColorScheme();
  return (
    <SessionProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <MenuProvider>
          <SafeAreaProvider>
            <StatusBar
              barStyle={
                colorScheme === 'dark' ? 'light-content' : 'dark-content'
              }
            />
            <NavigationContainer>
              <RootStack />
            </NavigationContainer>
          </SafeAreaProvider>
        </MenuProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default App;
