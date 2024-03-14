import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import ButtonBack from '../../components/elements/buttonBack'

const HomeScreen = () => {

    return (
        <ScrollView className='px-4 py-4 bg-white' >
            <ButtonBack />
            <Text>Home</Text>
        </ScrollView>
    )
}

export default HomeScreen