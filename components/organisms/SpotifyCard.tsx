import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import BasicCard from '../molecules/BasicCard';
import style from '../../styles/common';
import { AntDesign } from '@expo/vector-icons';

const SpotifyCard = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0); // Progress percentage (0 to 100)

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        // Simulate the progress update based on time (for demo purposes)
        let interval;
        if (isPlaying) {
            interval = setInterval(() => {
                setProgress((prevProgress) => (prevProgress + 1) % 101);
            }, 500); // Adjust the interval as needed
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isPlaying]);

    return (
        <View>
            <BasicCard borderColor={style.color.error.backgroundColor} borderWidth={4}>
                <View style={styles.musicContainer}>
                    <Image
                        source={require('../../assets/images/cover.jpeg')}
                        style={styles.coverImage}
                    />
                    <View style={styles.songInfo}>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <Text style={style.text.subtitle}>Song Title</Text>
                                <Text style={style.text.regularDimmed}>Artist Name</Text>
                            </View>
                            <TouchableOpacity onPress={handlePlayPause} style={styles.playButton}>
                                <AntDesign
                                    name={isPlaying ? 'pausecircle' : 'playcircleo'}
                                    size={32}
                                    color="white"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.progressContainer}>
                            <View style={[styles.progressBar, { width: `${progress}%` }]} />
                        </View>
                    </View>
                </View>
            </BasicCard>
        </View>
    );
};

const styles = StyleSheet.create({
    musicContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    coverImage: {
        width: 60,
        height: 60,
        borderRadius: 4,
        marginRight: 16,
    },
    songInfo: {
        flex: 1,
        gap: 8,

    },
    playButton: {
        backgroundColor: style.color.error.backgroundColor,
        padding: 8,
        borderRadius: 100,
    },
    progressContainer: {
        width: '100%',
        height: 2,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        marginTop: 4,
    },
    progressBar: {
        height: '100%',
        backgroundColor: style.color.error.backgroundColor,
    },
});

export default SpotifyCard;