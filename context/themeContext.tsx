import React, { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext(null);

export const useTheme = () => {
    return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(prevTheme => !prevTheme);
    };

    const theme = {
        isDarkTheme,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
};