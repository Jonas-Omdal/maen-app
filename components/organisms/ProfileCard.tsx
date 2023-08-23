import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import style from '../../styles/common'
import BasicCard from '../molecules/BasicCard'
import UserAvatar from '../atoms/UserAvatar'
import useHealthData from '../../hooks/useHealthData'

const ProfileCard = () => {
    const [date, setDate] = useState(new Date());

    const { longestStreak, mostStepsOfAllTime } = useHealthData(date);

    return (
        <View style={styles.container}>
            <BasicCard>
                <View style={styles.avatarContainer}>
                    <UserAvatar avatarUrl={require('../../assets/images/cat.jpg')} />
                    <Text style={style.text.regular}>Jonas</Text>
                </View>
            </BasicCard>
            <BasicCard title='Music' titleColor={style.color.error.backgroundColor}>
                <View style={styles.avatarContainer}>

                </View>
            </BasicCard>
            <BasicCard title='Health' titleColor={style.color.secondary.backgroundColor}>
                <View style={styles.avatarContainer}>
                    <Text style={style.text.regular}>Longest streak:</Text>
                    <Text style={style.text.regularDimmed}>{longestStreak}</Text>
                </View>
                <View style={styles.avatarContainer}>
                    <Text style={style.text.regular}>Most steps:</Text>
                    <Text style={style.text.regularDimmed}>{mostStepsOfAllTime}</Text>
                </View>
            </BasicCard>
        </View>
    )
}

export default ProfileCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        gap: 16,
    },
    avatarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
})


