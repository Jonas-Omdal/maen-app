import { View, useColorScheme } from 'react-native';
import { DARKTHEME, LIGHTTHEME } from '../constants/theme'


export function ThemeProvider({ children, theme }) {
    const colorScheme = theme === 'dark' ? 'dark' : 'light'; // Use the provided theme prop

    const themeTextStyle = colorScheme === 'light' ? LIGHTTHEME.colors.text : DARKTHEME.colors.text;
    const themeContainerStyle =
        colorScheme === 'light' ? LIGHTTHEME.colors.primary : DARKTHEME.colors.primary;

    return (
        <View style={{ flex: 1, backgroundColor: themeContainerStyle }}>
            {children}
        </View>

    );
}
