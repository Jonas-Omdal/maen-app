import React from 'react';
import { StyleSheet, View } from 'react-native';
import StepsCard from '../../components/organisms/StepsCard';
import WeatherCard from '../../components/organisms/WeatherCard';
import SpotifyCard from '../../components/organisms/SpotifyCard';



const Home = () => {


    return (
        <View style={styles.container}>
            <SpotifyCard />
            <WeatherCard />
            <StepsCard />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        gap: 16,
        backgroundColor: '#121212',
    },
});
export default Home