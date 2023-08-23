import React from 'react';
import { Image, StyleSheet } from 'react-native';

const UserAvatar = ({ avatarUrl }) => {
    return <Image source={avatarUrl} style={styles.avatar} />;
};

const styles = StyleSheet.create({

    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },

});

export default UserAvatar;
