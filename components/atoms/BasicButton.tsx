import { Text, StyleSheet, Pressable } from 'react-native';
import React from 'react'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        backgroundColor: 'black',
    },
    text: {
        color: '#fff',
        fontWeight: 'bold'
    }
});

const BasicButton = (props) => {
    const { onPress, title } = props;
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}

export default BasicButton;