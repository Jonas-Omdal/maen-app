import { View, Text } from 'react-native'
import React from 'react'
import style from '../../styles/common'
import ProfileCard from '../../components/organisms/ProfileCard'

const Profile = () => {
    return (
        <View style={style.content.container}>
            <Text style={style.text.regular}>Profile</Text>
            <ProfileCard />
        </View>
    )
}

export default Profile