import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const ButtonBack = ({ className }: { className?: string }) => {
    const navigate: any = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigate.goBack()} className={`w-12 h-12 rounded-full bg-light flex justify-center items-center ${className}`} >
            <Ionicons name="chevron-back-outline" size={24} color="black" />
        </TouchableOpacity>
    )
}

export default ButtonBack