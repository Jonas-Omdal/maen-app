import {
    lightningImage,
    mistImage,
    rainImage,
    snowImage,
    sunImage,
    cloudyImage,
    nightImage,
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
    Thunderstorm: lightningImage,
    Drizzle: rainImage,
    Rain: rainImage,
    Snow: snowImage,
    Atmosphere: mistImage,
    Clear: sunImage,
    Clouds: cloudyImage,
    Mist: mistImage,
    Smoke: mistImage,
    Haze: mistImage,
    Dust: sunImage,
    Fog: mistImage,
    Sand: sunImage,
    Ash: sunImage,
    Squall: rainImage,
    Tornado: lightningImage,
};

export { weatherIcons, weatherImages };