import axios from 'axios';
import { API_KEY } from '../utils/weatherApiConfig';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';

// City navn   
// City grader
// City luftfuktighet / Humidity
// City vindstyrke / Wind speed
// City værbeskrivelse / Weather description¨
// City vær icon / Weather icon

export const WeatherService = {
    getCurrentWeatherByLocation: async (latitude: number, longitude: number) => {
        const url = `${BASE_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};