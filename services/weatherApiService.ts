import axios from 'axios';
import { API_KEY } from '../utils/weatherApiConfig';
import * as Location from 'expo-location';
import moment from 'moment-timezone';


const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';

export async function getWeatherByLocation(query?: string) {
    try {
        let response;

        if (query) {
            response = await axios.get(BASE_URL, {
                params: {
                    q: query,
                    appid: API_KEY,
                    units: 'metric',
                },
            });
        } else {
            const { status } = await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') {
                throw new Error('Permission to access location was denied');
            }

            const location = await Location.getCurrentPositionAsync({});
            
            response = await axios.get(BASE_URL, {
                params: {
                    lat: location.coords.latitude,
                    lon: location.coords.longitude,
                    appid: API_KEY,
                    units: 'metric',
                },
            });
        }

        return response.data;
    } catch (error) {
        throw error;
    }
}
export function calculateCurrentTime(timezoneOffsetInSeconds) {
    const timezone = moment.tz.guess(); // You can also set a specific timezone if needed
    const currentTimeInTimezone = moment().utcOffset(timezoneOffsetInSeconds / 60).tz(timezone);
    return currentTimeInTimezone.format('HH:mm'); // Format the time as desired
}