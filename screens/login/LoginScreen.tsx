import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const LoginScreen = () => {
    return (
        <ScrollView className='px-4 py-4 bg-white' >
            <TouchableOpacity className='w-12 h-12 rounded-full bg-light flex justify-center items-center' >
                <Ionicons name="chevron-back-outline" size={24} color="black" />
            </TouchableOpacity>
        </ScrollView>
    )
}

export default LoginScreen