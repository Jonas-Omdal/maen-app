import { View, Text, StyleSheet } from 'react-native'
import React, { ReactNode } from 'react';
import style from '../../styles/common';

interface BasicCardProps {
    title?: string;
    titleColor?: string;
    children?: ReactNode;
    borderColor?: string;
    borderWidth?: number;
}

const BasicCard = ({ title, titleColor, children, borderColor, borderWidth }: BasicCardProps) => {
    const cardStyle = [
        style.content.card,
        borderColor && { borderColor },
        borderWidth && { borderWidth },
    ];

    const titleStyle = [
        style.text.subtitle,
        styles.cardTitle,
        titleColor && { color: titleColor }, // Apply custom title text color if provided
    ];

    return (
        <View style={cardStyle}>
            {title && <Text style={titleStyle}>{title}</Text>}
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    cardTitle: {
        marginBottom: 16,
    },
});

export default BasicCard;