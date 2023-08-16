import { Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { THEME } from '../../constants/theme';

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',

    },
    text: {
        color: THEME.colors.primary,
        fontWeight: 'bold'
    }
});

interface BasicButtonProps {
    title?: string;
    onPress?: () => void,
    variant?: 'filled' | 'outlined' | 'plain'
}

const BasicButton = ({ title, onPress, variant }: BasicButtonProps) => {
    const buttonVariants = () => {
        switch (variant) {
            case 'filled':
                return {
                    backgroundColor: THEME.background.container,
                }
            case 'outlined':
                return {
                    borderColor: THEME.colors.primary,
                    borderWidth: 2,
                    backgroundColor: 'transparent',
                };
            case 'plain':
                return {
                    backgroundColor: 'transparent',
                };
            default:
                'plain'
        }
    }

    return (
        <Pressable style={[styles.button, buttonVariants()]} onPress={onPress}>
            <Text style={styles.text} >{title}</Text>
        </Pressable>
    );
}

export default BasicButton;