import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import React from 'react';
import style from '../../styles/common';

const SpinnerWithText = ({ text }) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={style.color.primary.backgroundColor} />
            <Text style={style.text.regularDimmed}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
    },
});

export default SpinnerWithText;