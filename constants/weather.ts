import {
    lightning,
    mist,
    rain,
    snow,
    sun,
    cloudy,
    night,
} from "../assets/images";


const weatherIcons = {
    Thunderstorm: "⛈️",
    Drizzle: "🌧️",
    Rain: "🌧️",
    Snow: "❄️",
    Atmosphere: "🌫️",
    Clear: "☀️",
    Clouds: "☁️",
    Mist: "🌫️",
    Smoke: "🌫️",
    Haze: "🌫️",
    Dust: "🌫️",
    Fog: "🌫️",
    Sand: "🌫️",
    Ash: "🌫️",
    Squall: "🌬️",
    Tornado: "🌪️",
};

const weatherImages = {
    Thunderstorm: lightning,
    Drizzle: rain,
    Rain: rain,
    Snow: snow,
    Atmosphere: mist,
    Clear: sun,
    Clouds: cloudy,
    Mist: mist,
    Smoke: mist,
    Haze: mist,
    Dust: sun,
    Fog: mist,
    Sand: sun,
    Ash: sun,
    Squall: rain,
    Tornado: lightning
};

export { weatherIcons, weatherImages };