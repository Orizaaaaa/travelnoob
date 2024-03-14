import { View, Text, ScrollView, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import ButtonBack from '../../components/elements/buttonBack';
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {
    return (
        <ScrollView className='px-4 py-4 bg-white' >
            <ButtonBack />
        </ScrollView>
    )
}

export default LoginScreen