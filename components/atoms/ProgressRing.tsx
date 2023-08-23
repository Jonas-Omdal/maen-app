import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Animated, { useSharedValue, useAnimatedProps, withTiming } from 'react-native-reanimated';
import { AntDesign } from '@expo/vector-icons';
import SVG, { Circle } from 'react-native-svg';
import ConfettiCannon from 'react-native-confetti-cannon';

import style from '../../styles/common';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

type ProgressRingProps = {
    radius?: number;
    strokeWidth?: number;
    progress?: number;
};

const ProgressRing = ({ radius = 80, strokeWidth = 30, progress = 0.5 }: ProgressRingProps) => {
    const innerRadius = radius - strokeWidth / 2;
    const circumference = 2 * Math.PI * innerRadius;

    const fill = useSharedValue(0);

    useEffect(() => {
        fill.value = withTiming(progress, { duration: 1500 });
    }, [progress]);

    const animatedProps = useAnimatedProps(() => ({
        strokeDasharray: [circumference * fill.value, circumference]
    }));

    const isCompleted = progress >= 1; // Check if progress is completed

    return (
        <View style={{ width: radius * 2, height: radius * 2 }}>
            <SVG style={{ flex: 1 }}>
                {/* Background */}
                <Circle
                    r={innerRadius}
                    cx={radius}
                    cy={radius}
                    fill="transparent"
                    stroke={style.color.secondary.backgroundColor}
                    strokeWidth={strokeWidth}
                    opacity={0.2}
                />
                {/* Foreground */}
                <AnimatedCircle
                    animatedProps={animatedProps}
                    r={innerRadius}
                    cx={radius}
                    cy={radius}
                    fill="transparent"
                    stroke={style.color.secondary.backgroundColor}
                    strokeWidth={strokeWidth}
                    strokeDasharray={[circumference * progress, circumference]}
                    strokeLinecap="round"
                    rotation="-90"
                    originX={radius}
                    originY={radius}
                />
            </SVG>
            {isCompleted && (
                <>
                    <Text
                        style={{
                            position: 'absolute',
                            alignSelf: 'center',
                            top: radius - strokeWidth * 0.8, // Adjust position for centering
                            fontSize: strokeWidth * 1.3,
                        }}
                    >
                        😎
                    </Text>
                    <ConfettiCannon count={50} origin={{ x: radius, y: radius - strokeWidth * 0.8 }} fadeOut={true} fallSpeed={3000} />
                </>
            )}
        </View>
    );
};

export default ProgressRing;
