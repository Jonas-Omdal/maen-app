import axios from 'axios';
import { API_KEY } from '../utils/weatherApiConfig';
import * as Location from 'expo-location';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';

// City navn   
// City grader
// City luftfuktighet / Humidity
// City vindstyrke / Wind speed
// City værbeskrivelse / Weather description¨
// City vær icon / Weather icon

export async function getWeatherByLocation() {
    try {
        // Get user's current location
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            throw new Error('Permission to access location was denied');
        }

        const location = await Location.getCurrentPositionAsync({});

        // Fetch weather data using user's location
        const response = await axios.get(BASE_URL, {
            params: {
                lat: location.coords.latitude,
                lon: location.coords.longitude,
                appid: API_KEY,
                units: 'metric',
            },
        });

        return response.data;
    } catch (error) {
        throw error;
    }
}