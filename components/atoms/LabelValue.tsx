import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import style from '../../styles/common'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },

});

type LabelValueProps = {
    label: string;
    value: string;
    iconColor?: string;
    iconSize?: number;
    iconName?: keyof typeof MaterialCommunityIcons.glyphMap;
};

const LabelValue = ({ label, value, iconColor = style.color.secondary.backgroundColor, iconSize = 30, iconName }: LabelValueProps) => {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name={iconName} size={iconSize} color={iconColor} />
            <View>
                <Text style={style.text.subtitle}>{label}</Text>
                <Text style={style.text.regularDimmed}>{value}</Text>
            </View>
        </View>
    );
};

export default LabelValue