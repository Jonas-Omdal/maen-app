import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback } from 'react';
import { View } from 'react-native';

import StartPage from './startPage';

export default function App() {
    const [fontsLoaded] = useFonts({
        'Poppins-Light': require('../assets/fonts/poppins/Poppins-ExtraLight.ttf'),
        'Poppins-Thin': require('../assets/fonts/poppins/Poppins-Light.ttf'),
        'Poppins-Regular': require('../assets/fonts/poppins/Poppins-Regular.ttf'),
        'Poppins-Medium': require('../assets/fonts/poppins/Poppins-Medium.ttf'),
        'Poppins-Bold': require('../assets/fonts/poppins/Poppins-Bold.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View onLayout={onLayoutRootView} >
            <StartPage />
        </View>

    );
}