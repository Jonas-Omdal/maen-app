import React from 'react';
import { View } from 'react-native';
import WeatherCard from '../../components/organisms/WeatherCard';
import style from '../../styles/common';

const Home = () => {
    return (
        <View style={style.common.container}>
            <WeatherCard />
        </View>
    )
}

export default Home