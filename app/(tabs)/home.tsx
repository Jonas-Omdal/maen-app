import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { ThemeProvider } from '../../context/themeContext'
import ThemeToggle from '../../components/atoms/ThemeToggle';

const Home = () => {

    return (
        <ThemeProvider theme=''>
            <ThemeToggle />
        </ThemeProvider>
    )
}

export default Home