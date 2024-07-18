import { useColorScheme } from '@/components/useColorScheme';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useNavigation } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Pressable, Text } from 'react-native';
import 'react-native-reanimated';
import { Provider } from 'react-redux';
import '../global.css';
import { store } from './lib/store/store';

export {
    // Catch any errors thrown by the Layout component.
    ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
    // Ensure that reloading on `/modal` keeps a back button present.
    initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    // verifyInstallation();
    const [loaded, error] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
        ...FontAwesome.font,
    });

    // Expo Router uses Error Boundaries to catch errors in the navigation tree.
    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <Provider store={store}>
            <RootLayoutNav />
        </Provider>
    );
}

function RootLayoutNav() {
    const colorScheme = useColorScheme();
    const navigation = useNavigation();

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack>
                <Stack.Screen
                    name='(tabs)'
                    options={{
                        headerShown: false,
                        headerLeft: () => <Pressable onPress={() => alert('hello test')} />,
                    }}
                />
                <Stack.Screen
                    name='session-modal'
                    options={{
                        presentation: 'modal',
                        headerShown: true,
                        headerTitle: 'Log a Session',
                        headerRight: () => (
                            <Pressable className='p-2' onPress={() => navigation.goBack()}>
                                <Text className='text-blue-500'>cancel</Text>
                            </Pressable>
                        ),
                    }}
                />
            </Stack>
        </ThemeProvider>
    );
}
