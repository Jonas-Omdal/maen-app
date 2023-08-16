import { StyleSheet } from 'react-native';

const color = StyleSheet.create({
    /* COLORS */
    primary: {
        backgroundColor: '#bb86fc',
    },
    secondary: {
        backgroundColor: '#03dac6',
    },
    error: {
        backgroundColor: '#cf6679',
    },
})

const content = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#121212',
    },
    card: {
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#433E47',
    },
})

const text = StyleSheet.create({
    lightText: {
        fontSize: 16,
        fontFamily: 'Poppins-Light',
        color: 'rgba(255, 255, 255, 0.6)'
    },
    thinText: {
        fontSize: 16,
        fontFamily: 'Poppins-Thin',
        color: 'rgba(255, 255, 255, 0.6)'
    },
    regularDimmed: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: 'rgba(255, 255, 255, 0.6)'
    },
    regular: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: 'rgba(255, 255, 255, 0.87)'
    },
    secondaryText: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: 'rgba(255, 255, 255, 0.6)'
    },
    title: {
        fontSize: 24,
        fontFamily: 'Poppins-Bold',
        color: 'rgba(255, 255, 255, 0.87)'
    },
    subtitle: {
        fontSize: 18,
        fontFamily: 'Poppins-Medium',
        color: 'rgba(255, 255, 255, 0.87)'
    },
})



export default { content, text, color };