import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { weatherIcons, weatherImages } from "../../constants/weather";
import { getWeatherByLocation } from "../../services/weatherApiService";
import style from "../../styles/common";
import IconChip from "../molecules/IconChip";
import SearchBar from "../molecules/SearchBar";
import SpinnerWithText from "../atoms/SpinnerWithText";

const WeatherCard = () => {
    const [weatherData, setWeatherData] = useState<any | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);


    useEffect(() => {
        if (!searchQuery) {
            fetchWeatherDataByLocation();
        } else {
            fetchWeatherDataByQuery(searchQuery);
        }
    }, [searchQuery]);


    const fetchWeatherDataByLocation = async () => {
        try {
            const data = await getWeatherByLocation();
            setWeatherData(data);
            setIsLoading(false)
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    const fetchWeatherDataByQuery = async (query: string) => {
        try {
            const data = await getWeatherByLocation(query);
            setWeatherData(data);
            setIsLoading(false)
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };


    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    const temperatureInWholeNumber = Math.round(weatherData?.main.temp);
    const backgroundImg = weatherImages[weatherData?.weather[0].main] ?? null;
    const weatherIcon = weatherIcons[weatherData?.weather[0].main] ?? null;


    return (
        <>
            {isLoading ? (
                <View style={styles.loadingContainer}>
                    <SpinnerWithText text="Loading ..." />
                </View>
            ) : (
                <ImageBackground
                    imageStyle={styles.cardImage}
                    source={backgroundImg}
                    style={styles.cardContent}
                >
                    <View style={styles.cardContent}>
                        <View style={styles.searchBarSection}>
                            <SearchBar onSearch={handleSearch} />

                        </View>
                        <View style={styles.header}>
                            <View style={styles.locationAndDegree}>
                                <View style={styles.location}>
                                    <Entypo
                                        name="location-pin"
                                        size={24}
                                        color={style.color.primary.backgroundColor}
                                    />
                                    <Text style={styles.weatherTitleText}>{weatherData?.name}</Text>
                                </View>
                                <Text style={styles.weatherDegreeText}>
                                    {temperatureInWholeNumber}°
                                </Text>
                            </View>

                            <View style={styles.weatherDescriptionContainer}>
                                <Text style={style.text.regular}>{weatherData?.weather[0].description}</Text>
                                <Text style={styles.weatherIcon}>{weatherIcon}</Text>
                            </View>
                        </View>
                        <View style={styles.chipSection}>
                            <View style={styles.chipContainer}>
                                <IconChip
                                    title="8%"
                                    icon="weather-cloudy-arrow-right"
                                    iconColor={style.color.primary.backgroundColor} />
                                <IconChip
                                    title={weatherData?.wind.speed + " m/s"}
                                    icon="weather-windy"
                                    iconColor={style.color.primary.backgroundColor}
                                />
                                <IconChip
                                    title={weatherData?.main.humidity + "%"}
                                    icon="water"
                                    iconColor={style.color.primary.backgroundColor} />
                            </View>
                            <View style={styles.crosshairIconContainer}>
                                <MaterialCommunityIcons
                                    style={styles.crosshairIcon}
                                    name="crosshairs-gps" size={24}
                                    color={style.color.primary.backgroundColor}
                                    onPress={fetchWeatherDataByLocation} />
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    cardImage: {
        borderRadius: 8,
        borderColor: style.color.primary.backgroundColor,
        borderWidth: 4,
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
    weatherDescriptionContainer: {
        maxWidth: 140,
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
    loadingContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 4,
        borderColor: style.color.primary.backgroundColor,
        borderRadius: 8,
        flex: 1,
    },
    crosshairIconContainer: {
        padding: 4,
        borderRadius: 4,
        backgroundColor: style.content.card.backgroundColor,
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
        justifyContent: "space-between",
        flexDirection: "row",
    },
    chipContainer: {
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

