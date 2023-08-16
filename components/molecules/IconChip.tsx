import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import style from '../../styles/common'


interface IconChipProps {
    title?: string;
    icon?: keyof typeof MaterialCommunityIcons.glyphMap;
    iconSize?: number;
    iconColor?: string;
    chipColor?: string;
}

const DEFAULT_ICON_SIZE = 18;
const DEFAULT_ICON_COLOR = style.common.text.color;

const IconChip = ({ title, icon, iconSize = DEFAULT_ICON_SIZE, iconColor = DEFAULT_ICON_COLOR, chipColor }: IconChipProps) => {
    return (
        <View style={[styles.container, chipColor && { backgroundColor: chipColor }]}>
            <Text style={style.common.text}>{title}</Text>
            {icon && <MaterialCommunityIcons name={icon} size={iconSize} color={iconColor} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 12,
        paddingHorizontal: 8,
        paddingVertical: 4,
        backgroundColor: style.common.card.backgroundColor,
        borderRadius: 20,
    }
})

export default IconChip