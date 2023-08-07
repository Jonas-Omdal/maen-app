import { View, Text, StyleSheet } from 'react-native'
import React, { ReactNode } from 'react';
import { DARKTHEME } from '../../constants/theme';

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        paddingHorizontal: 16,
        borderRadius: 4,
        backgroundColor: DARKTHEME.colors.primary,
        color: 'white'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 8,
    },
});

interface BasicCardProps {
    title?: string;
    children: ReactNode;
}

const BasicCard = ({ title, children }: BasicCardProps) => {
    return (
        <View style={styles.container}>
            {title && <Text style={styles.title}>{title}</Text>}
            {children}
        </View>
    )
}

export default BasicCard