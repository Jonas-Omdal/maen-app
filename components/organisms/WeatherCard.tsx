import { Entypo, Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { getWeatherByLocation } from "../../services/weatherApiService";
import IconChip from "../molecules/IconChip";
import style from "../../styles/common";
import { weatherImages, weatherIcons } from "../../constants/weather";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SearchBar from "../molecules/SearchBar";
import moment from 'moment-timezone';

const WeatherCard = () => {
    const [weatherData, setWeatherData] = useState<any | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [currentTime, setCurrentTime] = useState<string>(moment().format('HH:mm:ss'));


    useEffect(() => {
        if (!searchQuery) {
            fetchWeatherDataByLocation();
        } else {
            fetchWeatherDataByQuery(searchQuery);
        }

        const updateTime = setInterval(() => {
            setCurrentTime(moment().utcOffset(weatherData?.timezone_offset / 3600).format('HH:mm:ss'));
        }, 1000);

        return () => clearInterval(updateTime);
    }, [searchQuery, weatherData]);

    const fetchWeatherDataByLocation = async () => {
        try {
            const data = await getWeatherByLocation();
            setWeatherData(data);
            updateCurrentTime(data.timezone);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    const fetchWeatherDataByQuery = async (query: string) => {
        try {
            const data = await getWeatherByLocation(query);
            setWeatherData(data);
            updateCurrentTime(data.timezone);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    const updateCurrentTime = (timezoneOffset: number) => {
        const currentTimezoneOffset = timezoneOffset / 3600; // Convert to hours
        setCurrentTime(moment().utcOffset(currentTimezoneOffset).format('HH:mm:ss'));
    };


    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    const backgroundImg = weatherImages[weatherData?.weather[0].main] ?? null;
    const weatherIcon = weatherIcons[weatherData?.weather[0].main] ?? null;


    return (
        <ImageBackground
            imageStyle={styles.cardImage}
            source={backgroundImg}
            style={styles.cardContent}
        >
            <View style={styles.cardContent}>
                <View style={styles.searchBarSection}>
                    <SearchBar onSearch={handleSearch} />
                    <MaterialCommunityIcons
                        style={styles.crosshairIcon}
                        name="crosshairs-gps" size={24}
                        color={style.color.secondary.backgroundColor}
                        onPress={fetchWeatherDataByLocation} />
                </View>
                <View style={styles.header}>
                    <View style={styles.locationAndDegree}>
                        <View style={styles.location}>
                            <Entypo
                                name="location-pin"
                                size={24}
                                color={style.color.secondary.backgroundColor}
                            />
                            <Text style={styles.weatherTitleText}>{weatherData?.name}</Text>
                        </View>
                        <Text style={styles.weatherDegreeText}>
                            {weatherData?.main.temp}°
                        </Text>
                        <View>
                            {weatherData?.timezone && (
                                <Text>
                                    {currentTime}
                                </Text>
                            )}
                        </View>
                    </View>

                    <View style={styles.description}>
                        <Text style={style.text.regular}>{weatherData?.weather[0].description}</Text>
                        <Text style={styles.weatherIcon}>{weatherIcon}</Text>
                    </View>
                </View>
                <View style={styles.chipSection}>
                    <IconChip title="8%" icon="weather-cloudy-arrow-right" />
                    <IconChip
                        title={weatherData?.wind.speed + " m/s"}
                        icon="weather-windy"
                    />
                    <IconChip title={weatherData?.main.humidity + "%"} icon="water" />
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    cardImage: {
        borderRadius: 8,
        borderColor: style.content.card.backgroundColor,
        borderWidth: 2,
    },
    cardContent: {
        display: "flex",
        paddingHorizontal: 8,
        paddingVertical: 12,
        gap: 8,
    },
    locationAndDegree: {
        display: "flex",
        flexDirection: "column",
    },
    location: {
        display: "flex",
        flexDirection: "row",
    },
    description: {
        display: "flex",
        alignItems: "center",
    },
    weatherIcon: {
        fontSize: 42,
    },
    searchBarSection: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 12
    },
    crosshairIcon: {
        display: "flex",
        alignContent: "flex-end",
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    chipSection: {
        display: "flex",
        flexDirection: "row",
        gap: 8,
    },
    weatherDegreeText: {
        fontSize: 38,
        fontFamily: "Poppins-Bold",
        color: "rgba(255, 255, 255, 0.87)",
    },
    weatherTitleText: {
        fontSize: 18,
        fontFamily: "Poppins-Light",
        color: "rgba(255, 255, 255, 0.87)",
    },
});

export default WeatherCard;

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
