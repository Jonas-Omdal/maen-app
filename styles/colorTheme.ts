import { StyleSheet } from 'react-native';

const lightTheme = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#FFFFFF', // Example background color for light theme
    },
    text: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#000000', // Example text color for light theme
    },
});

// Dark theme styles
const darkTheme = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#121212', // Example background color for dark theme
    },
    text: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#FFFFFF', 
    },
});

export { lightTheme, darkTheme };
