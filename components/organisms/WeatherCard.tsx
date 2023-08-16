import { Entypo, Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import rainImage from '../../assets/images/weather/rain.gif';
import { THEME } from '../../constants/theme';
import { getWeatherByLocation } from '../../services/weatherApiService';
import IconChip from '../molecules/IconChip';
import style from '../../styles/common';



// TODO: REFACTOR STYLES. USE NEW VARIABLES. DEKETE THEME CONSTANT
const WeatherCard = () => {
    const [weatherData, setWeatherData] = useState<any | null>(null);

    useEffect(() => {
        fetchWeatherData();
    }, []);

    const fetchWeatherData = async () => {
        try {
            const data = await getWeatherByLocation();
            setWeatherData(data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    return (
        <ImageBackground imageStyle={styles.cardImage} source={rainImage} style={styles.cardContent}>
            <View style={styles.cardContent} >
                <View style={styles.header}>
                    <View style={styles.location}>
                        <Entypo name='location-pin' size={24} color={THEME.colors.secondary} />
                        <Text style={styles.weatherTitleText}>{weatherData?.name}</Text>
                    </View>
                    <View style={styles.description}>
                        <Text style={style.text.regular}>Mostly Sunny</Text>
                        <Ionicons name='partly-sunny' size={46} color={THEME.colors.error} />
                    </View>
                </View>
                <View style={styles.header}>
                    <Text style={styles.weatherDegreeText}>{weatherData?.main.temp}°</Text>
                </View>
                <View style={styles.chipSection}>
                    <IconChip title='8%' icon="weather-cloudy-arrow-right" />
                    <IconChip title={weatherData?.wind.speed + ' km/h'} icon="weather-windy" />
                    <IconChip title={weatherData?.main.humidity + '%'} icon="water" />
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    cardImage: {
        borderRadius: 8,
        borderColor: THEME.colors.secondary,
        borderWidth: 2,

    },
    cardContent: {
        display: 'flex',
        paddingHorizontal: 8,
        paddingVertical: 12,
        gap: 8,
    },
    location: {
        display: 'flex',
        flexDirection: 'row',
    },
    description: {
        display: 'flex',
        alignItems: 'center',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        color: THEME.colors.primary,
        fontWeight: 'bold'
    },
    chipSection: {
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
    },

    weatherDegreeText: {
        fontSize: 38,
        fontFamily: 'Poppins-Bold',
        color: 'rgba(255, 255, 255, 0.87)'
    },
    weatherTitleText: {
        fontSize: 18,
        fontFamily: 'Poppins-Light',
        color: 'rgba(255, 255, 255, 0.87)'
    },
});


export default WeatherCard

/* 
        <ImageBackground imageStyle={styles.cardImage} source={rainImage} style={styles.cardContent}>
            <View style={styles.cardContent} >
                <View style={styles.header}>
                    <View style={styles.location}>
                        <Entypo name='location-pin' size={24} color={THEME.colors.secondary} />
                        <Text style={styles.weatherTitleText}>Egersund</Text>
                    </View>
                    <Text style={style.common.text}>Mostly Sunny</Text>
                </View>
                <View style={styles.header}>
                    <Text style={styles.weatherDegreeText}>32°</Text>
                    <Ionicons name='partly-sunny' size={24} color={THEME.colors.error} />
                </View>
                <View style={styles.chipSection}>
                    <IconChip title='8%' icon="weather-cloudy-arrow-right" />
                    <IconChip title='5km/h' icon="weather-windy" />
                    <IconChip title='64%' icon="water" />
                </View>
            </View>
        </ImageBackground>
*/