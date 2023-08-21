import { View, Text, StyleSheet } from 'react-native'
import React, { ReactNode } from 'react';
import style from '../../styles/common';


interface BasicCardProps {
    title?: string;
    children?: ReactNode;
    borderColor?: string;
    borderWidth?: number;
}

const BasicCard = ({ title, children, borderColor, borderWidth }: BasicCardProps) => {
    const cardStyle = [
        style.content.card,
        borderColor && { borderColor },
        borderWidth && { borderWidth },
    ];

    return (
        <View style={cardStyle}>
            {title && <Text style={style.text.title}>{title}</Text>}
            {children}
        </View>
    )
}

export default BasicCard;