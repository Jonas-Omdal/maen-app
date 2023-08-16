import { View, Text, StyleSheet } from 'react-native'
import React, { ReactNode } from 'react';
import style from '../../styles/common';



interface BasicCardProps {
    title?: string;
    children?: ReactNode;
}

const BasicCard = ({ title, children }: BasicCardProps) => {
    return (
        <View style={style.common.card}>
            {title && <Text style={style.common.title}>{title}</Text>}
            {children}
        </View>
    )
}

export default BasicCard