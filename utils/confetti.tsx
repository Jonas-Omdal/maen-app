import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const NUM_CONFETTI = 100;
const CONFETTI_SIZE = 8;
const FALL_DURATION = 3000;

const createConfetti = () => {
    return [...Array(NUM_CONFETTI)].map((_, i) => {
        return {
            key: i,
            x: Math.random(),
            translateY: new Animated.Value(0),
            delay: Math.random() * FALL_DURATION,
        };
    });
};

const Confetti = ({ isCompleted }) => {
    const confetti = useRef(createConfetti()).current;

    useEffect(() => {
        if (isCompleted) {
            confetti.forEach(({ translateY, delay }) => {
                Animated.timing(translateY, {
                    toValue: 1,
                    duration: FALL_DURATION,
                    delay,
                    useNativeDriver: true,
                }).start();
            });
        }
    }, [isCompleted]);

    return (
        <View style={styles.confettiContainer}>
            {confetti.map(({ key, x, translateY }) => (
                <Animated.View
                    key={key}
                    style={[
                        styles.confetti,
                        {
                            left: `${x * 100}%`,
                            transform: [
                                {
                                    translateY: translateY.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [-CONFETTI_SIZE, 1], // Changed the outputRange to numbers
                                    })
                                },
                            ],
                        },
                    ]}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    confettiContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    confetti: {
        width: CONFETTI_SIZE,
        height: CONFETTI_SIZE,
        backgroundColor: 'green',
        borderRadius: CONFETTI_SIZE / 2,
        position: 'absolute',
    },
});

export default Confetti;
