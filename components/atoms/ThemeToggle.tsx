import React, { useState } from 'react';
import { View, Switch } from 'react-native';
import { ThemeProvider } from '../../context/themeContext';

const ThemeToggle = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
    };

    return (
        <ThemeProvider theme={isDarkTheme ? 'dark' : 'light'}>
            <Switch value={isDarkTheme} onValueChange={toggleTheme} />
        </ThemeProvider>
    );
};

export default ThemeToggle