import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import BasicCard from '../molecules/BasicCard'
import LabelValue from '../atoms/LabelValue'
import ProgressRing from '../atoms/ProgressRing'
import { AntDesign } from '@expo/vector-icons';

import style from '../../styles/common'
import useHealthData from '../../hooks/useHealthData'

const StepsCard = () => {
    const [date, setDate] = useState(new Date());

    const { steps, distance, flights } = useHealthData(date)

    const changeDate = (numDays: number) => {
        const currentDate = new Date(date); // Create a copy of the current date
        // Update the date by adding/subtracting the number of days
        currentDate.setDate(currentDate.getDate() + numDays);

        setDate(currentDate); // Update the state variable
    }

    console.log(`Steps: ${steps} | Distance: ${distance}m | Flights: ${flights}`);
    return (
        <BasicCard borderColor={style.color.secondary.backgroundColor} borderWidth={4}>
            <View style={styles.cardContainer}>
                <View style={styles.dateProgressContainer}>
                    <ProgressRing progress={steps / 10000} />
                    <View style={styles.datePicker}>
                        <AntDesign
                            onPress={() => changeDate(-1)}
                            name="left"
                            size={20}
                            color={style.color.secondary.backgroundColor}
                        />
                        <View style={styles.dateContainer}>
                            <Text style={styles.date}>{date.toDateString()}</Text>
                        </View>
                        <AntDesign
                            onPress={() => changeDate(1)}
                            name="right"
                            size={20}
                            color={style.color.secondary.backgroundColor}
                        />
                    </View>
                </View>
                <View style={styles.valueContainer}>
                    <LabelValue label="Steps" value={steps.toString()} iconName='shoe-print' />
                    <LabelValue label="Distance" value={`${(distance / 1000).toFixed(2)} km`} iconName='map-marker-distance' />
                    <LabelValue label="Stairs" value={flights.toString()} iconName='stairs-up' />
                </View>
            </View>
        </BasicCard>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    valueContainer: {
        flex: 1,
        display: 'flex',
        gap: 16,
    },

    dateProgressContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
    },
    datePicker: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dateContainer: {
        width: 120,
        alignItems: 'center',
    },
    date: {
        color: style.text.regular.color,
        fontSize: style.text.subtitle.fontSize,
        textAlign: 'center',
    },
})



export default StepsCard