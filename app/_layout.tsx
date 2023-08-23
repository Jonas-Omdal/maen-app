import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useCallback, useEffect } from 'react';
import { useColorScheme } from 'react-native';

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

    const [loaded, error] = useFonts({
        'Poppins-Light': require('../assets/fonts/poppins/Poppins-ExtraLight.ttf'),
        'Poppins-Thin': require('../assets/fonts/poppins/Poppins-Light.ttf'),
        'Poppins-Regular': require('../assets/fonts/poppins/Poppins-Regular.ttf'),
        'Poppins-Medium': require('../assets/fonts/poppins/Poppins-Medium.ttf'),
        'Poppins-Bold': require('../assets/fonts/poppins/Poppins-Bold.ttf'),
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

    return <RootLayoutNav />;
}

function RootLayoutNav() {

    return (
        <Stack >
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    );
}